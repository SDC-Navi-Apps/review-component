const mongoose = require('mongoose');
const db = require('./index.js');

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  avatarUrl: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;