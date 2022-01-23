import { config } from 'dotenv';
config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import cabRoutes from './routes/cabRoutes.js';
import userRoutes from './routes/userRoutes.js';
import rideRoutes from './routes/rideRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

// connect to MongoDB
connectDB();

// body parser
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/cabs', cabRoutes);

// error middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
