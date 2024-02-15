const Joi = require("joi");

// validating registration
const registrationValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(data);
};

// validating login
const loginnValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(data);
};
// logic to verify our token (JWT)

module.exports = { registrationValidation, loginnValidation };