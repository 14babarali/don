import Pharmacy from "./pharmacyModel.js";
import userModel from "./userModel.js";
import FormDataSchema from "./FormDataSchema.js";
import mongoose from "mongoose";

const medicalRequestSchema = new mongoose.Schema(
  {
    medicineName: String,
    prescription: String,
    name: String,
    email: String,
    user_id: String,
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Confirmed", "Delivered", "Cancelled"],
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    pharmacyResponses: [
      {
        pharmacy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Pharmacy",
        },
        response: {
          type: String,
          enum: ["Yes", "No", "Pending"],
          default: "Pending",
        },
        deliveryTime: {
          type: String,
          required: true
        },
        pharmacyName: {
          type: String,
          required: true
        },
        pharmacyAddress: {
          type: String,
          required: true
        },
        pharmacyPhone: {
          type: String,
          required: true
        }
      },
    ],
  },
  { timestamps: true }
);

// Compile the model only if it hasn't been compiled yet
if (!mongoose.models.MedicalRequest) {
  mongoose.model("MedicalRequest", medicalRequestSchema);
}

medicalRequestSchema.statics.copyMatchingData = async function () {
  const FormData = mongoose.model("FormData");
  const User = mongoose.model("User");
  const MedicalRequest = mongoose.model("MedicalRequest");

  // Find all FormData documents
  const formDataDocs = await FormData.find();

  for (const formData of formDataDocs) {
    // Find the user by email in UserModel
    const user = await User.findOne({ email: formData.email });

    if (user) {
      // If a user with the same email is found, create a new MedicalRequest document
      const medicalRequest = new MedicalRequest({
        medicineName: formData.medicineName,
        prescription: formData.prescription,
        name: formData.name,
        email: formData.email,
        user_id: formData.user_id,
        status: formData.status,
        orders: formData.orders,
        user: user._id,
        pharmacyResponses: formData.pharmacyResponses,
      });

      // Save the new MedicalRequest document
      await medicalRequest.save();
    }
  }
};

export default mongoose.model("MedicalRequest", medicalRequestSchema);
