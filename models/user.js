const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
});

const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
      name: Joi.string().min(5).max(250).required(),
      email: Joi.string().min(8).max(250).required().email(),
      password: passwordComplexity().required()
  });
  return schema.validate(user);
}

exports.User = User; 
exports.validate = validateUser;