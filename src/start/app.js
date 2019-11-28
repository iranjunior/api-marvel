const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const mongoose = require('../config/database');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(routes);

mongoose.connect();

module.exports = app;
