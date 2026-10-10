
import express from 'express';
import { getDeliveryOptions } from '../controllers/deliveryOption.controller.js';
const router = express.Router();
router.get('/', getDeliveryOptions);
export default router;
