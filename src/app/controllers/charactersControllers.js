const { api, config } = require('../../service/api');
const UserModel = require('../models/user');

const indexLocal = async (request, response, User) => {
  try {
    const { id } = request.user;
    const { offset } = await User.findOne({
      id,
    }, 'offset');
    const { data } = await api.get(`/characters?${config(offset)}`);

    await User.updateOne({ id }, { offset: offset + data.data.count });

    response.status(200).send(data);
  } catch (error) {
    response.status(500).send(error);
  }
};


const getLocal = async (characters) => {
  const response = [];
  for (let index = 0; index < characters.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await api.get(`/characters/${characters[index]}?${config()}`).then((res) => response.push(res.data.data.results[0])).catch(() => response.push({}));
  }
  return response;
};


module.exports = {
  index: (request, response) => indexLocal(request, response, UserModel),
  get: (characters) => getLocal(characters),
  indexLocal,
};
