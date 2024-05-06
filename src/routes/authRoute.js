//routes/authRoute.js
import userModel from "../models/userModel.js";
import Pharmacy from '../models/pharmacyModel.js';
import express from "express";
import {
  submitContactForm
} from '../controllers/contactFormController.js';
import {
  registerController,
  loginController,

  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
  // singupController,


} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
// import { medicineRequestController } from "../controllers/authController.js";
//router object
const router = express.Router();

//routing


router.post("/register", registerController);
//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);



//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);


//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
router.get("/users", requireSignIn, isAdmin, async (req, res) => {
  try {
    const users = await userModel.find({}, "-password"); // Exclude the password field
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// router.post("/medicine-request", medicineRequestController);

// Route to get all users with role 0
router.get("/users/role-0", requireSignIn, isAdmin, async (req, res) => {
  try {
    const users = await userModel.find({ role: 0 }, "-password"); // Exclude the password field
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Route to get all users with role 1
router.get("/users/role-1", requireSignIn, isAdmin, async (req, res) => {
  try {
    const users = await userModel.find({ role: 1 }, "-password"); // Exclude the password field
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
