import mongoose from 'mongoose';

const deliveryOptionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  deliveryDays: { type: Number, required: true },
  priceCents: { type: Number, required: true }
}, { timestamps: true });

export const DeliveryOption = mongoose.model('DeliveryOption', deliveryOptionSchema);
