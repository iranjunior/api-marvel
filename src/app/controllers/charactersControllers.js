const { api, config } = require('../../service/api');

const indexLocal = async (request, response) => {
  try {
    await api.get(`/characters?${config(25)}`).then((res) => {
      response.status(200).send(res.data);
    }).catch((err) => {
      response.status(500).send(err);
    });
  } catch (error) {
    response.status(500).send(error);
  }
  return response.status(200).send();
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
  index: (request, response) => indexLocal(request, response),
  get: (characters) => getLocal(characters),
  indexLocal,
};
