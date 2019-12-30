const mongoose = require('mongoose');

const { uri, env } = require('./vars');

exports.connect = async () => {
  if (env !== 'production') { mongoose.set('debug', true); }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    keepAlive: true,
    useCreateIndex: true,
  });


  return mongoose.connection;
};
