const routes = require('express').Router();
const SessionController = require('../../../controllers/sessionControllers');
const UserController = require('../../../controllers/userController');
const validate = require('../../../middleware/validate');

routes.post('/signup', validate.user, UserController.store);
routes.post('/signin', validate.signin, SessionController.auth);

module.exports = routes;
