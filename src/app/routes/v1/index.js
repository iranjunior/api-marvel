const routes = require('express').Router();

const auth = require('../../middleware/auth');
const User = require('./user');
const Health = require('./health');
const Session = require('./session');
const Characters = require('./characters');

routes.use(Health); // Routes de checagem do sistema
routes.use(Session); // Rotas de criacao de Sessao

// Apartir deste ponto, todas as rotas so serao acessadas por quem tem token

routes.use(auth);
routes.use(User); // Routes User
routes.use(Characters); // Routes Characters

module.exports = routes;
