import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
      // unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
      // unique: true
    },
  },
  {
    timestamps: true
  }
);

// this method on userSchema can be accessed on instantiated user model
// use bycrypt to compare user entered plain text password to encrypted password in database
// to authUser during user login
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// mongoose runs this function before saving data to mongodb,
// This middleware func encrypts the password before saving to database
userSchema.pre('save', async function (next) {
  // if password is not modified, comes from mongoose
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
export default User;
