// Final year project/server.js
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import mongoose from "mongoose";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";
const { v2 } = cloudinary;
import cookieParser from "cookie-parser";
import path from "path";
import fs from 'fs';
import { upload, parser } from "./config/config.js";
import authRoutes from "./routes/authRoute.js";
import authenticateUser from './middlewares/authenticateUser.js'
import userRoute from "./routes/user.routes.js";

import User from "./models/userModel.js";
import pharmacyRoutes from './routes/pharmacyRoutes.js';
// import Pharmacy from './controllers/pharmacyController.js';
import jwt from 'jsonwebtoken';
import {getAllPharmacy} from './controllers/pharmacyController.js';
import countRoutes from './routes/countRoutes.js';
// import { submitForm } from './controllers/formDataController.js';
import FormData from "./models/FormDataSchema.js";
import { verifyToken ,isAuthenticated} from './middlewares/authMiddleware.js';
import { getAllUsers } from "./controllers/user.Controller.js";
import {
  submitForm,
  respond,

  getAllFormData,
  pharmacyResponsesYes,
} from "./controllers/formDataController.js";
import { submitContactForm } from "./controllers/contactFormController.js";
import {
  requireSignIn,

} from "./middlewares/authMiddleware.js"


const app = express();
dotenv.config();
connectDB();
app.use(express.json());
const __dirname = path.resolve();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
const PORT = process.env.PORT || 8080;

// app.use("/api/v1/user", userRoute);
app.use('/api', countRoutes);

app.use("/api/auth", authRoutes);

app.use('/pharmacy', pharmacyRoutes);
app.use("/api/v1/auth", authRoutes);
app.post("/contactform", submitContactForm);
app.get('/api/v1/pharmacy', getAllPharmacy);
app.post("/api/v1/submitform", requireSignIn ,upload.single("prescription"), submitForm);
app.post("/respond", respond);
app.get("/getallformdata", getAllFormData);
app.get("/api/users", getAllUsers);




// Route to get user information





export {app}
