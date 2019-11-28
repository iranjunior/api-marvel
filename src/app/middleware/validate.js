const { user } = require('../../utils/shemas');

const store = async (request, response, next, schema) => {
  try {
    const { error } = await schema.validateAsync(request.body);
    if (!error) return next();
    return response.status(400).send({ error });
  } catch (error) {
    return response.status(400).send({ error });
  }
};

module.exports = {
  user: (request, response, next) => store(request, response, next, user),
};
