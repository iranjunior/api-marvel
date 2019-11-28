const jwt = require('jsonwebtoken');
const { secret } = require('../../config/vars');

const auth = (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response
      .status(401)
      .json({ message: 'Sem Token de autenticação' })
      .send();
  }

  const [, token] = authorization.split(' ');

  try {
    jwt.verify(token, secret);
    return next();
  } catch (error) {
    return response
      .status(401)
      .json({ message: 'Token invalido' })
      .send();
  }
};

module.exports = auth;
