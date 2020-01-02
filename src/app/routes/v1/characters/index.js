const routes = require('express').Router();

const CharactersController = require('../../../controllers/charactersControllers');

routes.get('/characters', CharactersController.index);

module.exports = routes;
