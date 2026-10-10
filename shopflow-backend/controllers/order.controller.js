
import { Order } from '../models/Order.js';
import { Product } from '../models/Product.js';
import { DeliveryOption } from '../models/DeliveryOption.js';
import { CartItem } from '../models/CartItem.js';

export const getOrders = async (req, res) => {
  const expand = req.query.expand;
  let orders = await Order.find().sort({ orderTimeMs: -1 });

  if (expand === 'products') {
    orders = await Promise.all(orders.map(async (order) => {
      const products = await Promise.all(order.products.map(async (product) => {
        const productDetails = await Product.findOne({ id: product.productId });
        return {
          ...product,
          product: productDetails
        };
      }));
      return {
        ...order.toJSON(),
        products
      };
    }));
  }

  res.json(orders);
};

export const createOrder = async (req, res) => {
  const cartItems = await CartItem.find();
  if (cartItems.length === 0) return res.status(400).json({ error: 'Cart is empty' });

  let totalCostCents = 0;
  const products = await Promise.all(cartItems.map(async (item) => {
    const product = await Product.findOne({ id: item.productId });
    if (!product) throw new Error(`Product not found: ${item.productId}`);
    const deliveryOption = await DeliveryOption.findOne({ id: item.deliveryOptionId });
    if (!deliveryOption) throw new Error(`Invalid delivery option: ${item.deliveryOptionId}`);
    
    const productCost = product.priceCents * item.quantity;
    const shippingCost = deliveryOption.priceCents;
    totalCostCents += productCost + shippingCost;
    const estimatedDeliveryTimeMs = Date.now() + deliveryOption.deliveryDays * 24 * 60 * 60 * 1000;
    return {
      productId: item.productId,
      quantity: item.quantity,
      estimatedDeliveryTimeMs
    };
  }));

  totalCostCents = Math.round(totalCostCents * 1.1);

  const order = await Order.create({
    orderTimeMs: Date.now(),
    totalCostCents,
    products
  });

  await CartItem.deleteMany({});
  res.status(201).json(order);
};

export const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  const expand = req.query.expand;

  let order = await Order.findOne({ id: orderId });
  if (!order) return res.status(404).json({ error: 'Order not found' });

  if (expand === 'products') {
    const products = await Promise.all(order.products.map(async (product) => {
      const productDetails = await Product.findOne({ id: product.productId });
      return {
        ...product,
        product: productDetails
      };
    }));
    order = {
      ...order.toJSON(),
      products
    };
  }

  res.json(order);
};
