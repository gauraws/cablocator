import express from 'express';
import { getAllCabs } from '../controllers/cab.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/search').get(protect, getAllCabs);

export default router;
