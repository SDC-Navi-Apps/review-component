require('newrelic');
const express = require('express');
const path = require('path');
const db = require('../database/models/index.js');
const Review = require('../database/models/Review.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3002;
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Routes = require('./routes.js');
Routes(app);

app.use(function specificErrorHandler(err, req, res, next) {
  if (err.message === 'this') {
    res.end();
  } else {
    next(err);
  }
});

app.use(function catchAllErrorHandler(err, req, res, next) {
  res.status(500).end();
});

const server = app.listen(port, () => console.log(`Review component running on port ${port}!`));

module.exports = server;