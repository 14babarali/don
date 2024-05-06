import FormData from "../models/FormDataSchema.js";
import User from "../models/userModel.js"; // Adjust the path as necessary
import pharmacyModel from "../models/pharmacyModel.js";
import mongoose from "mongoose";
import { uploadOnCloudinary } from "../helpers/cloudinary.js";


export const submitForm = async (req, res) => {
 try {
    const { medicineName, email, name, user_id } = req.body;
    const prescriptionPath = req.file.path;

    // Upload the image to Cloudinary
    const cloudinaryResponse = await uploadOnCloudinary(prescriptionPath);

    // If the upload to Cloudinary was successful
    if (cloudinaryResponse) {
        // Create FormData document
        const formData = new FormData({
          medicineName,
          prescription: cloudinaryResponse.url, // Use the Cloudinary URL
          email,
          name,
          user_id,
        });

        // Save FormData document
        await formData.save();

        // Update user with new FormData
        await mongoose.model("userModel").updateOne(
          { _id: mongoose.Types.ObjectId(user_id) },
          { $push: { formData: formData._id } }
        );

        // Remove the local file
        fs.unlinkSync(prescriptionPath);

        // Response
        res.json({ success: true });
    } else {
        // If upload to Cloudinary failed
        throw new Error("Failed to upload image to Cloudinary");
    }
 } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
 }
};

// export const submitForm = async (req, res) => {
//  try {
//    const formData = new FormData({
      
//       medicineName: req.body.medicineName,
//       prescription: req.file.path,
//       email: req.body.email,
//       name: req.body.name,
//       user_id: req.body.user_id,
//     });
//     await formData.save();
//     console.log("File upload:", req.body.user_id);
//     console.log("Request body:", req.body);
//     console.log("File upload:", req.file);

//     await mongoose
//       .model("userModel")
//       .updateOne(
//         { _id: mongoose.Types.ObjectId(req.body.user_id) },
//         { $push: { formData: formData._id } }
//       );

//     res.json({ success: true });
//  } catch (error) {
//     console.error("Error submitting form:", error);
//     res.status(500).json({ success: true, error: "Internal Server Error" });
//     console.log("Request body:", req.body);
//     console.log("File upload:", req.file);
//  }
// };




export const respond = async (req, res) => {
 try {
    const { id, response } = req.body;
    await FormData.findByIdAndUpdate(id, { $set: { response } });
    res.json({ success: true });
 } catch (error) {
    console.error("Error responding to request:", error);
    res.status(500).json({ success: true, error: "Internal Server Error" });
 }
};

export const pharmacyResponsesYes = async (req, res) => {
 try {
    const { id, response } = req.body;
    if (response === "Yes") {
      await FormData.findByIdAndUpdate(id, { $set: { response } });
      res.json({ success: true });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid response. Only 'Yes' responses are allowed.",
      });
    }
 } catch (error) {
    console.error("Error responding to request:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
 }
};



export const getAllFormData = async (req, res) => {
  try {

    const formData = await FormData.find({}, 'name medicineName prescription').exec();
    
    const responseData = formData.map(data => ({
      name: data.name, 
      medicineName: data.medicineName,
      prescription: data.prescription
    }));

    res.json(responseData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};