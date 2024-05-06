// pharmacyRoutes.js
import express from 'express';
import * as pharmacyController from '../controllers/pharmacyController.js';

const router = express.Router();

router.post('/signup', pharmacyController.signup);
router.post('/login', pharmacyController.login);
router.patch('/profile', pharmacyController.updateProfile);
router.get('/logout', pharmacyController.logout);

export default router;
