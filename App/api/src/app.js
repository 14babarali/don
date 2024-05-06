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
import pharmacyRoutes from './routes/pharmacyRoutes.js';
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());


app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
const PORT = process.env.PORT || 8080;

app.use('/api/pharmacy', pharmacyRoutes);




export {app}