import Ride from '../models/Ride.js';
import Cab from '../models/Cab.js';
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
      user: req.user._id,
      bookingId: crypto.randomBytes(16).toString('hex')
    });

    const newRide = await ride.save();
    res.status(201).json({
      status: 'SUCCESS',
      bookingId: newRide.bookingId,
      message: 'Searching for a cab.',
      bookingTimeout: 70 // time post which driver allocation will no longer happen
      // "booking_timeout_unit": "SECONDS"
    });
  }
});

// @desc    Track booked ride
// @route   GET /api/rides/track/:bookingId
// @access  Private
export const trackRide = asyncHandler(async (req, res) => {
  const bookingId = req.params.bookingId;

  // track within radius of 2 miles
  const radius = 2 / 3963.2;

  if (!bookingId) {
    res.status(400);
    throw new Error('Missing booking id');
  }

  const bookedRide = await Ride.findOne({ bookingId });

  const [cabsFound] = await Cab.find({
    id: bookedRide.category,
    location: {
      $geoWithin: {
        $centerSphere: [[bookedRide.pickupLat, bookedRide.pickupLng], radius]
      }
    },
    canRideNow: true
  })
    .sort({ 'eta.value': 1 })
    .limit(1);

  //   console.log(cabsFound);
  if (cabsFound.length === 0) {
    res.status(404);
    throw new Error('No cabs available');
  }
  (bookedRide.isBooked = true), (bookedRide.bookedAt = Date.now());
  bookedRide.bookingDetails = {
    cabType: cabsFound.cabDetails.cabType,
    cabNumber: cabsFound.cabDetails.cabNumber,
    cabModel: cabsFound.cabDetails.cabModel,
    driverName: cabsFound.cabDetails.driverName,
    driverNumber: cabsFound.cabDetails.driverNumber
  };

  const confirmedBooking = await bookedRide.save();

  res.status(200).json({ data: confirmedBooking });
});
