import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
        
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
        unique: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders",
      },
    ],
     formData: [{ type: mongoose.Schema.Types.ObjectId, ref: "FormData" }]
  },
  { timestamps: true }
);

userModel.post("save", async function (doc) {
  const FormData = mongoose.model("FormData");
  const formData = new FormData({ user: doc._id });
  await formData.save();
});


async function sendFormData(userId, formData) {
  const User = mongoose.model("user");
  const FormData = mongoose.model("FormData");
  const user = await User.findById(userId);
  const newFormData = new FormData({ ...formData, user: user._id });
  await newFormData.save();
  user.formData.push(newFormData._id);
  await user.save();
}


export default mongoose.model("user", userModel);
