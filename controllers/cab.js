import Cab from '../models/Cab.js';
import asyncHandler from 'express-async-handler';
import geoCoder from '../utils/geocoder.js';

export const getAllCabs = asyncHandler(async (req, res) => {
  const { address } = req.query;

  if (!address) {
    res.status(400);
    throw new Error('Missing address query params');
  }

  const [loc] = await geoCoder.geocode(address);

  if (!loc) {
    res.status(404);
    throw new Error("openstreetmap can't geocode provided address");
  }

  // track within radius of 2 miles
  const radius = 2 / 3963.2;

  const cabsFound = await Cab.find({
    location: {
      $geoWithin: {
        $centerSphere: [[loc.latitude, loc.longitude], radius]
      }
    },
    canRideNow: true
  }).sort({ 'eta.value': 1 });

  if (cabsFound.length === 0) {
    res.status(400);
    throw new Error('No cabs available for location');
  }

  res.json({ data: cabsFound });
});
