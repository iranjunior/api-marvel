const UserModel = require('../models/user');

const checkTokenLocal = async (request, response, User, next) => {
  const { id } = request.params;
  const [, token] = request.headers.authorization.split(' ');

  const avaliable = await User.check({ id }, token);

  if (!avaliable) { return response.status(403).send({ mesage: 'Nao autorizado' }); }

  return next();
};

module.exports = {
  checkToken: (request, response, next) => checkTokenLocal(request, response, UserModel, next),
  checkTokenLocal,
};
