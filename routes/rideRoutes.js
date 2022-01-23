import express from 'express';
import { createRide, trackRide, getMyRides } from '../controllers/ride.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/create').post(protect, createRide);
router.route('/track/:bookingId').get(protect, trackRide);
router.route('/myrides').get(protect, getMyRides);

export default router;
