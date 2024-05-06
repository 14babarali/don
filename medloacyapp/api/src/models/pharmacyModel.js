// pharmacyModel.js (in your models folder)
import mongoose from 'mongoose';

const pharmacySchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  answer: String,
  licenseNumber: String,
});

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

export default Pharmacy;