import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import userModel from '../models/userModel.js';

const verifyToken = promisify(jwt.verify);

const authenticateUser = async (req, res, next) => {
    
     try {
    if (req.path == "/login" || req.path == "/register" || req.path == "/") {
      next();
    } else {
      jwt.verify(req.headers.token, 'oer0kl94welssod', (err, decoded) => {
        if (decoded && decoded.user) {
          req.user = decoded;
          next();
        } else {
          return res.status(401).json({
            errorMessage: 'User unauthorized!',
            status: false
          });
        }
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: 'Something went wrong!',
      status: false
    });
  }
    
    
};

export default authenticateUser;
