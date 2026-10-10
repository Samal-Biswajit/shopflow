import mongoose from 'mongoose';
import crypto from 'crypto';

const orderSchema = new mongoose.Schema({
  id: { type: String, required: true, default: () => crypto.randomUUID(), unique: true },
  orderTimeMs: { type: Number, required: true },
  totalCostCents: { type: Number, required: true },
  products: { type: Array, required: true }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);
