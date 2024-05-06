import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const authenticateUser = (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    // If there's no token, return an error
    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, decoded) => {
        try {
            if (error) {
                // Token verification failed
                if (error.name === 'TokenExpiredError') {
                    return res.status(401).json({ success: false, message: 'Token expired' });
                }
                throw error; // Throw other verification errors
            }

            // Check if the user exists
            const user = await userModel.findById(decoded.userId);

            // If user doesn't exist, return an error
            if (!user) {
                return res.status(401).json({ success: false, message: 'User not found' });
            }

            // Set the user object in the request for future use
            req.user = user;

            // Move to the next middleware or route handler
            next();
        } catch (error) {
            // Other errors
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }
    });
};

export default authenticateUser;
