/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
const { secret } = require('../../config/vars');
const Characters = require('./charactersControllers');
const pathResolver = require('../lib/helpers/pathsResolver');

const storeLocal = async (request, response, User) => {
  try {
    const {
      email, name, age, password, city, state, country, characters,
    } = request.body;

    const exist = await User.check({ email });

    if (exist) { return response.status(403).send({ message: 'Usuario ja cadastrado' }); }

    const user = await User.create({
      email, name, age, password, city, state, country, characters,
    });

    const token = jwt.sign({ id: user.id }, secret);

    return response.status(200).send({ token, id: user.id });
  } catch (error) {
    return response.status(500).send({ error });
  }
};

const showLocal = async (request, response, User) => {
  try {
    const { id } = request.params;
    const user = await User.findOne({ id });

    const characters = await Characters.get(user.characters);

    return response.status(200).send({ user, characters });
  } catch (error) {
    return response.status(500).send({ error });
  }
};


const updateLocal = async (request, response, User) => {
  try {
    const { id } = request.params;
    const user = request.body;

    const { nModified } = await User.updateOne({ id }, user);
    if (!nModified) {
      return response.status(204).send({ message: 'Nao foi feita nenhuma atualizacao' });
    }

    return response.status(200).send({ message: 'Usuario atualizado com sucesso' });
  } catch (error) {
    return response.status(500).send(error);
  }
};

const destroyLocal = async (request, response, User) => {
  try {
    const { id } = request.params;
    const { deletedCount } = await User.deleteOne({ id });
    if (!deletedCount) {
      return response.status(204).send({ message: 'Usuario nao Deletado' });
    }

    return response.status(200).send({ message: 'Usuario Deletado com sucesso' });
  } catch (error) {
    return response.status(500).send(error);
  }
};


module.exports = {
  store: (request, response) => storeLocal(request, response, UserModel),
  show: (request, response) => showLocal(request, response, UserModel),
  update: (request, response) => updateLocal(request, response, UserModel),
  destroy: (request, response) => destroyLocal(request, response, UserModel),
  storeLocal,
  showLocal,
  updateLocal,
  destroyLocal,
};
