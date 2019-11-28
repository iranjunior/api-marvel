const routes = require('express').Router();
const UserController = require('../app/controllers/userController');
const CharactersController = require('../app/controllers/charactesControllers');
const validate = require('../app/middleware/validate');
const auth = require('../app/middleware/auth');

routes.get('/', (request, response) => response
  .status(200)
  .json({
    message: 'Welcome to my application',
  })
  .send());

routes.post('/users', validate.user, UserController.store);
routes.get('/users/:id/characters', UserController.showWithCharacters);

routes.get('/characters', CharactersController.index);
routes.use(auth);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.destroy);


module.exports = routes;
