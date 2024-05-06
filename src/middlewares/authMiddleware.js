//Path:fyp/middlwares/authmiddlwares.js
//middlwares for auth
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "User not authenticated." })
    };
    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    };
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

const authMiddleware = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

const conversationMiddleware = async (req, res, next) => {
  const conversationId = req.params.conversationId;
  const conversation = await Conversation.findById(conversationId);
  if (conversation && (conversation.patientId === req.user._id || conversation.pharmacyId === req.user._id)) {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
};

const chatMiddleware = async (req, res, next) => {
  const chatId = req.params.chatId;
  const chat = await Chat.findById(chatId);
  if (chat && (chat.conversationId === req.params.conversationId)) {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
};

// Other imports and middleware functions...
const verifyToken = (req, res, next) => {
 const authHeader = req.headers['authorization'];
 const token = authHeader && authHeader.split(' ')[1];

 if (!token) {
    return res.status(401).json({ message: 'No token provided' });
 }

 jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
 });
};



export { verifyToken, isAuthenticated,   authMiddleware, conversationMiddleware, chatMiddleware };

