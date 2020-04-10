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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Routes = require('./routes.js');
Routes(app);

const server = app.listen(port, () => console.log(`Review component running on port ${port}!`));

module.exports = server;