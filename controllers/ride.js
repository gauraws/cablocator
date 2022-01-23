import Ride from '../models/Ride.js';
import asyncHandler from 'express-async-handler';
import crypto from 'crypto';

// const id = crypto.randomBytes(16).toString("hex");

// @desc    Create new ride
// @route   POST /api/rides/create
// @access  Private
export const createRide = asyncHandler(async (req, res) => {
  const {
    pickupLat,
    pickupLng,
    dropLat,
    dropLng,
    category,
    pickupMode,
    paymentMethod,
    totalFair
  } = req.body;

  if (
    !pickupLat ||
    !pickupLng ||
    !dropLat ||
    !dropLng ||
    !category ||
    !pickupMode ||
    !paymentMethod ||
    !totalFair
  ) {
    res.status(400);
    throw new Error('Missing mandatory parameters');
  } else {
    let ride = new Ride({
      pickupLat,
      pickupLng,
      dropLat,
      dropLng,
      category,
      pickupMode,
      paymentMethod,
      totalFair,
      user: req.user._id
    });

    const newRide = await ride.save();
    res.status(201).json({
      status: 'SUCCESS',
      bookingId: crypto.randomBytes(16).toString('hex'),
      message: 'Searching for a cab.',
      bookingTimeout: 70 // time post which driver allocation will no longer happen
      // "booking_timeout_unit": "SECONDS"
    });
  }
});
