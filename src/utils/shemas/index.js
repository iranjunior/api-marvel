const signin = require('./signin.joi');
const update = require('./update.joi');
const user = require('./user.joi.js');

module.exports = {
  user,
  signin,
  update,
};
