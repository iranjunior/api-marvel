const jwt = require('jsonwebtoken');

const { secret } = require('../config/vars');

const generateLocal = (id) => jwt.sign(
  {
    id,
  },
  secret,
);

module.exports = {
  generate: (id) => generateLocal(id),
  generateLocal,
};
