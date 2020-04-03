const mongoose = require('mongoose');
const db = require('./index.js');

const reviewSchema = new mongoose.Schema({
  appId: {type: mongoose.Schema.Types.ObjectId, ref: 'App'},
  authorId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: String,
  likes: Number,
  rating: Number,
  hasReply: Boolean,
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;