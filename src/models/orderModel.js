import mongoose from "mongoose";


const orderSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    medicineName: {
      type: String,
      required: true,
    },
    prescriptionFile: {
      // Assuming you want to store the file path or URL
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Confirmed", "Delivered", "Cancelled"],
    },
  },
  { timestamps: true }
);





export default mongoose.model("orders", orderSchema);
