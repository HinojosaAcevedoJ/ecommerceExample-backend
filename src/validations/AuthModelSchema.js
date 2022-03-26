const mongoose = require('mongoose')
const joigoose = require('joigoose')(mongoose)
const Joi = require('joi')

const joiAuthSchema = {
  email: Joi.string()
    .email()
    .required(),
  user: Joi.string()
    .required(),
  password: Joi.string()
    .required(),
  permissions: Joi.string()
    .default('1'),
}
const authSchema = Joi.object(joiAuthSchema)

const mongooseAuthSchema = new mongoose.Schema(
  joigoose.convert(authSchema)
)

module.exports = mongoose.model('user', mongooseAuthSchema)
