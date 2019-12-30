const routes = require('express').Router();
const HealthController = require('../../../controllers/healthControllers');

routes.get('/health', HealthController.index);
routes.get('/health/marvel', HealthController.marvel);

module.exports = routes;
