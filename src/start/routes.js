const routes = require('express').Router();
const CharactersController = require('../app/controllers/charactersControllers');
const SessionController = require('../app/controllers/sessionControllers');
const UserController = require('../app/controllers/userController');
const checkUser = require('../app/middleware/checkToken');
const validate = require('../app/middleware/validate');
const auth = require('../app/middleware/auth');

routes.get('/health', async (req, res) => res.status(200).send({
  message: 'Estou Online',
}));


routes.post('/signup', validate.user, UserController.store);
routes.post('/signin', validate.signin, SessionController.auth);
routes.use(auth);
// Routes User
routes.get('/user/:id', checkUser.checkToken, UserController.show);
routes.put('/user/:id', validate.update, checkUser.checkToken, UserController.update);
routes.delete('/user/:id', checkUser.checkToken, UserController.destroy);

// Routes Characters
routes.get('/characters', CharactersController.index);

module.exports = routes;
