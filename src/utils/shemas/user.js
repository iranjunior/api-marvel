const Joi = require('@hapi/joi');

module.exports = Joi.object({
  name: Joi.string()
    .required()
    .regex(/^[a-zA-Z\s.]{2,80}$/),
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9?!@#$%¨&*()_-]{8,20}$/),
  age: Joi.number().required().min(1),
  city: Joi.string().required().max(80),
  state: Joi.string().required().max(80),
  country: Joi.string().required().max(80),
  characters: Joi.array().optional().items(Joi.number().max(999999999)),

});
