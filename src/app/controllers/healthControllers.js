const { api, config } = require('../../service/api');

const indexLocal = async (request, response) => response.status(200).send({
  message: 'Servico Online',
});
const marvelLocal = async (request, response) => {
  const { data } = await api.get(`/characters?${config()}`);
  if (data) {
    return response.status(200).send({
      message: 'Servico da Marvel Online',
    });
  }
  return response.status(500).send({
    message: 'Servico da Marvel Caiu',
  });
};
module.exports = {
  index: (request, response) => indexLocal(request, response),
  marvel: (request, response) => marvelLocal(request, response),
  indexLocal,
  marvelLocal,
};
