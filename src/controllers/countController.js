import userModel from "../models/userModel.js";
import Pharmacy from '../models/pharmacyModel.js';


export const getPharmacyCount = async (req, res) => {
  try {
    const count = await Pharmacy.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTotalUserCount = async (req, res) => {
  try {
    const count = await userModel.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTotalOrderCount = async (req, res) => {
  try {
    const count = await User.aggregate([
      { $unwind: "$orders" },
      { $group: { _id: null, count: { $sum: 1 } } }
    ]);
    res.json({ count: count[0]?.count || 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};