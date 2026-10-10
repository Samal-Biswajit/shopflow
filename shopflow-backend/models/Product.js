import mongoose from 'mongoose';
import crypto from 'crypto';

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, default: () => crypto.randomUUID(), unique: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  rating: { type: Object, required: true },
  priceCents: { type: Number, required: true },
  keywords: { type: [String], required: true }
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);
