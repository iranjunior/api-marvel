const user = require('./user.joi.js');
const signin = require('./signin.joi');
const update = require('./update.joi');

module.exports = {
  user,
  signin,
  update,
};
