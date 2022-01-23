import mongoose from 'mongoose';
import cabs from './data/cabs.js';
import Cab from './models/Cab.js';
import connectDB from './config/db.js';
import { config } from 'dotenv';

config();
connectDB();

const importData = async () => {
  try {
    await Cab.deleteMany();
    await Cab.insertMany(cabs);

    console.log('Data imported');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Cab.deleteMany();

    console.log('Data deleted');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
