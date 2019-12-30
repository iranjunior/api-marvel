const routes = require('express').Router();
const UserController = require('../../../controllers/userController');
const checkUser = require('../../../middleware/checkToken');
const validate = require('../../../middleware/validate');

// Routes User
routes.get('/user/:id', checkUser.checkToken, UserController.show);
routes.put('/user/:id', validate.update, checkUser.checkToken, UserController.update);
routes.delete('/user/:id', checkUser.checkToken, UserController.destroy);

module.exports = routes;
