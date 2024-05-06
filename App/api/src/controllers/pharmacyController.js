// pharmacyController.js
import Pharmacy from '../models/pharmacyModel.js';

// pharmacyController.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

export const signup = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer, licenseNumber } = req.body;
    if(!name){
      return res.send({ error: "Pharmacy Name is Required" });
    }
    if(!email){
      return res.send({ error: "Email Name is Required" });
    }
    if(!password){
      return res.send({ error: "Password Name is Required" });
    }
    if(!phone){
      return res.send({ error: "Phone Name is Required" });
    }
    if(!address){
      return res.send({ error: "address Name is Required" });
    }
    if(!answer){
      return res.send({ error: "Answer Name is Required" });
    }
    if(!licenseNumber){
      return res.send({ error: "License Number Name is Required" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 12);
    const pharmacy = new Pharmacy({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
      licenseNumber
    });
    await pharmacy.save();
    res.status(201).json({ message: 'Pharmacy registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering pharmacy.' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const pharmacy = await Pharmacy.findOne({ email });
    if (!pharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found.' });
    }
    const isMatch = await bcrypt.compare(password, pharmacy.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    const token = jwt.sign({ id: pharmacy._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in.' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, email, phone, address, answer, licenseNumber } = req.body;
    const pharmacy = await Pharmacy.findById(req.user.id);
    if (!pharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found.' });
    }
    pharmacy.name = name || pharmacy.name;
    pharmacy.email = email || pharmacy.email;
    pharmacy.phone = phone || pharmacy.phone;
    pharmacy.address = address || pharmacy.address;
    pharmacy.answer = answer || pharmacy.answer;
    pharmacy.licenseNumber = licenseNumber || pharmacy.licenseNumber;
    await pharmacy.save();
    res.status(200).json({ message: 'Profile updated successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile.' });
  }
};

export const logout = async (req, res) => {
  // To log out, you would typically clear the JWT on the client side
  res.status(200).json({ message: 'Logged out successfully.' });
};
