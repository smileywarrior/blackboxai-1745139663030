const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  isDonor: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  role: { type: String, enum: ['user', 'admin', 'hospital'], default: 'user' },
  donationHistory: [
    {
      date: Date,
      location: String,
      notes: String,
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
