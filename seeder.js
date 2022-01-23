import mongoose from 'mongoose';
import cabs from './data/cabs.js';
// import users from './data/users.js';
// import User from './models/Cab.js';
import Cab from './models/Cab.js';
// import Order from './models/orderModel.js';
import connectDB from './config/db.js';
// import colors from 'colors';
import { config } from 'dotenv';

config();
connectDB();

const importData = async () => {
  try {
    // await User.deleteMany();
    // await Product.deleteMany();
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
    await User.deleteMany();
    // await Product.deleteMany();
    await Order.deleteMany();

    console.log('Data deleted'.red.inverse);
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
