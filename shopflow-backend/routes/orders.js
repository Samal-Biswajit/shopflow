
import express from 'express';
import { getOrders, createOrder, getOrderById } from '../controllers/order.controller.js';
const router = express.Router();
router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:orderId', getOrderById);
export default router;
