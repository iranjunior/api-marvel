const routes = require('express').Router();
const CharactersController = require('../app/controllers/charactersControllers');
const SessionController = require('../app/controllers/sessionControllers');
const UserController = require('../app/controllers/userController');
const validate = require('../app/middleware/validate');
const auth = require('../app/middleware/auth');


routes.post('/signup', validate.user, UserController.store);
routes.post('/signin', validate.signin, SessionController.auth);
routes.use(auth);
// Routes User
routes.get('/user/*', UserController.show);
routes.delete('/user/:id', UserController.destroy);

// Routes Characters
routes.get('/characters', CharactersController.index);

module.exports = routes;
