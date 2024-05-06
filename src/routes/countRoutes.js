
import { 
getPharmacyCount,
    getTotalUserCount,
    getTotalOrderCount } from '../controllers/countController.js';
// countRoutes.js
import express from 'express';


const router = express.Router();

router.get('/pharmacies/count', getPharmacyCount);
router.get('/users/count', getTotalUserCount);
router.get('/orders/count', getTotalOrderCount);


export default router;
