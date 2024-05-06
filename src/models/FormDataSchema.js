import mongoose from "mongoose";
import pharmacyModel from "../models/pharmacyModel.js";
import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
const formDataSchema = new mongoose.Schema(
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
      ref: "user", 
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
if (!mongoose.models.FormData) {
  mongoose.model("FormData", formDataSchema);
}

export default mongoose.model("FormData", formDataSchema);
