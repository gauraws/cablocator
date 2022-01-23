import express from 'express';
import { createRide } from '../controllers/ride.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/create').post(protect, createRide);

// router
//   .route('/profile') // protect this routes using jwt token
//   .get(protect, getUserProfile) // Get user profile
//   .put(protect, updateUserProfile); // Update user profile

export default router;