import express from 'express';
import { getAllCabs } from '../controllers/cab.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/search').get(protect, getAllCabs);
// router.route('/track/:bookingId').get(protect, trackRide);

// router
//   .route('/profile') // protect this routes using jwt token
//   .get(protect, getUserProfile) // Get user profile
//   .put(protect, updateUserProfile); // Update user profile

export default router;
