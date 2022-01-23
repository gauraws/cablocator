import mongoose from 'mongoose';

const cabSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    displayName: {
      type: String,
      required: true
    },
    canRideNow: {
      type: Boolean,
      required: true
    },
    cabDetails: {
      cabType: String,
      cabNumber: String,
      cabModel: String,
      driverName: String,
      driverNumber: String
    },
    eta: {
      value: Number,
      unit: String
    },
    location: {
      type: {
        type: String,
        enum: ['Point']
        // required: true
      },
      coordinates: {
        type: [Number]
        // required: true
      }
    }
  },
  {
    timestamps: true
  }
);

const Cab = mongoose.model('Cab', cabSchema);
export default Cab;
