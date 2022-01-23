import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile
} from '../controllers/user.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/register').post(registerUser);
router.post('/login', authUser);
router
  .route('/profile') // protect this routes using jwt token
  .get(protect, getUserProfile) // Get user profile
  .put(protect, updateUserProfile); // Update user profile

export default router;
