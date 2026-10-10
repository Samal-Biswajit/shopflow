
import express from 'express';
import { getCartItems, addCartItem, updateCartItem, deleteCartItem } from '../controllers/cartItem.controller.js';
const router = express.Router();
router.get('/', getCartItems);
router.post('/', addCartItem);
router.put('/:productId', updateCartItem);
router.delete('/:productId', deleteCartItem);
export default router;
