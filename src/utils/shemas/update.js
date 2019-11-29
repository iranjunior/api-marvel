const Joi = require('@hapi/joi');

module.exports = Joi.object({
  name: Joi.string()
    .optional()
    .regex(/^[a-zA-Z\s.]{2,80}$/),
  email: Joi.string()
    .optional()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string()
    .optional()
    .pattern(/^[a-zA-Z0-9?!@#$%¨&*()_-]{8,20}$/),
  age: Joi.number().optional().min(1),
  city: Joi.string().optional().max(80),
  state: Joi.string().optional().max(80),
  country: Joi.string().optional().max(80),
  characters: Joi.array().optional().items(Joi.number().max(999999999)),
  offset: Joi.number().optional().min(0).max(10000),

});
