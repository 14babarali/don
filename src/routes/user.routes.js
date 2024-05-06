import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
// import { getUsersForSidebar } from "../controllers/user.controller.js";
// import { getOtherUsers } from "../controllers/user.controller.js";
import {
    getUsersForSidebar,
    loginController,
    logout,
    getOtherUsers,
    registerController,

    // singupController

} from '../controllers/authController.js'

import {isAuthenticated} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.route("/register").post(registerController);

router.route("/login").post(loginController);
router.route("/logout").get(logout);
// router.route("/logout").get(logout);

router.route("/").get(isAuthenticated, getOtherUsers);
export default router;
