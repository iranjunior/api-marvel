const Joi = require('@hapi/joi');

module.exports = Joi.object({
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9?!@#$%¨&*()_-]{8,20}$/),
});
