import mongoose from 'mongoose';

const rideSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // Should be ObjectId
      required: true,
      ref: 'User'
    },
    pickupLat: {
      type: Number,
      required: true
    },
    pickupLng: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      enum: ['Micro', 'Mini', 'Auto', 'Bike', 'Prime Sedan', 'Prime SUV'],
      required: true
    },
    dropLat: {
      type: Number,
      required: true
    },
    dropLng: {
      type: Number,
      required: true
    },
    pickupMode: {
      type: String,
      enum: ['now', 'later'],
      required: true
    },
    paymentMethod: {
      type: String,
      enum: ['cash', 'credit'],
      required: true
    },
    totalFair: {
      type: Number,
      required: true,
      default: 0.0
    },
    paidAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Ride = mongoose.model('Ride', rideSchema);
export default Ride;
