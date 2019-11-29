const Axios = require('axios');
const md5 = require('md5');
const { publicKey, privateKey } = require('../config/vars');

const api = Axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  timeout: 10000,
});

const config = (offset) => {
  const timestamp = Date.now();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);

  if (offset) {
    return `ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}`;
  }
  return `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
};

module.exports = {
  api, config,
};
