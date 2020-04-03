const mongoose = require('mongoose');
const db = require('./index.js');

const appSchema = new mongoose.Schema({
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
}, { timestamps: true });

const App = mongoose.model('App', appSchema);

module.exports = App;