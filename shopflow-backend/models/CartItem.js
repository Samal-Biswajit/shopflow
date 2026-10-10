import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  deliveryOptionId: { type: String, required: true }
}, { timestamps: true });

export const CartItem = mongoose.model('CartItem', cartItemSchema);
