// pharmacyResponseSchema.js
import mongoose from 'mongoose';

const pharmacyResponseSchema = new mongoose.Schema({
 pharmacyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pharmacy',
    required: true
 },
 formDataId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FormData',
    required: true
 },
 response: {
    type: String,
    required: true
 }
}, { timestamps: true });

export default mongoose.model('PharmacyResponse', pharmacyResponseSchema);
