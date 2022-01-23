import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

// Get the token from request headers, verify it using jwt
// and set req.user to User fetched from token id
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  // console.log(req.headers.authorization)
  if (req.headers.authorization) {
    // console.log('token found')
    try {
      token = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded)
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

