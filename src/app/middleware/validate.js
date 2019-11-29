const { user, signin } = require('../../utils/shemas');

const validate = async (request, response, next, schema) => {
  try {
    const { error } = await schema.validateAsync(request.body);
    if (!error) return next();
    return response.status(400).send({ error });
  } catch (error) {
    return response.status(400).send({ error });
  }
};

module.exports = {
  user: (request, response, next) => validate(request, response, next, user),
  signin: (request, response, next) => validate(request, response, next, signin),
};
