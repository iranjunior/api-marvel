const UserModel = require('../../src/app/models/user');

const user = async (User) => {
  await User.remove({});
};

module.exports = {
  user: () => user(UserModel),
};
