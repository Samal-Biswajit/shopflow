
import express from 'express';
import { getPaymentSummary } from '../controllers/paymentSummary.controller.js';
const router = express.Router();
router.get('/', getPaymentSummary);
export default router;
