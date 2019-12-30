const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const routesV1 = require('./app/routes/v1');
const mongoose = require('./config/database');
const swaggerConfig = require('../swagger.json');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

// Route Swagger
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.use('/v1', routesV1);

mongoose.connect();

module.exports = app;
