import PharmacyResponse from "../models/pharmacyResponseSchema.js";
import FormData from "../models/FormDataSchema.js";
export const submitForm = async (req, res) => {
 try {
    const formData = new FormData({
      medicineName: req.body.medicineName,
      prescription: req.file.path,
      user: req.user._id, // Use the authenticated user's ID
    });
    await formData.save();



    // Send a success response to the client.
    res.json({ success: true });
 } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
 }
};
