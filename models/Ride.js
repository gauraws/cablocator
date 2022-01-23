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
      enum: [
        'micro',
        'mini',
        'auto',
        'bike',
        'prime_sedan',
        'prime_suv',
        'prime_play'
      ],
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
    bookingId: {
      type: String,
      required: true,
      unique: true
    },
    bookingDetails: {
      cabType: { type: String },
      cabNumber: { type: String },
      cabModel: { type: String },
      driverName: { type: String },
      driverNumber: { type: String }
    },
    isBooked: {
      type: Boolean,
      required: true,
      default: false
    },
    bookedAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Ride = mongoose.model('Ride', rideSchema);
export default Ride;
