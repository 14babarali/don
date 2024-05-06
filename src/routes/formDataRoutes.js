import express from "express";
import { submitForm } from "../controllers/formDataController.js";
import { loginController } from "../controllers/authController.js";
import FormData from "../models/FormDataSchema.js"; // Ensure this is imported
import { copyData } from '../controllers/medicalRequestController.js';
const router = express.Router();

// Route to handle form submission
router.post("/submitform", loginController, submitForm);

// Route to get all form data with user information
router.get("/getallformdata", async (req, res) => {
  try {
    const formData = await FormData.find().populate({
      path: "user",
      select: "name address",
    });
    res.json(formData);
  } catch (error) {
    console.error("Error getting form data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Route to get pharmacy responses (assuming formData is correctly defined)
router.get("/api/v1/phrmyresp", async (req, res) => {
  try {
    const formData = await FormData.find(); // Add your query logic here
    res.json(formData);
  } catch (error) {
    console.error("Error getting form data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Route to get 'Yes' responses
router.get("/yesResponsesRouter", async (req, res) => {
  try {
    const yesResponses = await FormData.find({ response: "Yes" })
      .sort({ createdAt: -1 })
      .exec();
    res.status(200).json(yesResponses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.toString() });
  }
});
router.post('/copy-data', copyData);
export default router;
