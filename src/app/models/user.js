const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');
const uuid = require('short-uuid');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  characters: [{ type: Number }],
}, {
  timestamps: true,
});

UserSchema.pre('validate', async function (next) {
  this.id = await uuid().generate();

  next();
});

UserSchema.pre('save', async function (next) {
  const salts = bcrypt.genSaltSync();

  this.password = await bcrypt.hashSync(this.password, salts);

  next();
});

UserSchema.static('check', async function (element, token) {
  try {
    const [user] = await this.find(element);

    if (token && !!user) {
      const { payload } = jwt.decode(token, { complete: true });

      return user.id === payload.id;
    }
    return !!user;
  } catch (error) {
    return false;
  }
});


module.exports = model('User', UserSchema);
