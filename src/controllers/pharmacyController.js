// pharmacyController.js
import Pharmacy from '../models/pharmacyModel.js';

// pharmacyController.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'here90dsiew904=-3940di';

export const signup = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer, licenseNumber } = req.body;
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

  res.status(200).json({ message: 'Logged out successfully.' });
};


export const getuserinfo = async (req, res) => {
    try {
    // The user's ID is stored in req.user.id from the authentication middleware
    const pharmacy = await Pharmacy.findById(req.user.id);
    if (!pharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found.' });
    }
    // Send back the necessary user information
    res.json({
      name: pharmacy.name,
      address: pharmacy.address,
      phone: pharmacy.phone
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

};
// Define the route for fetching all users.
export const getAllPharmacy = async (req, res) => {
    try {
        const pharmacies = await Pharmacy.find();
        res.json(pharmacies);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Error fetching users" });
    }
};
