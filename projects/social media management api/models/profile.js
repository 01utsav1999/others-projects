const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bio: { type: String },
  avatar: { type: String },
  // Add more fields as needed for user profiles
});

module.exports = mongoose.model('Profile', profileSchema);
