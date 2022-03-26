const mongoose = require('mongoose')
const joigoose = require('joigoose')(mongoose)
const Joi = require('joi')

const joiProductSchema = {
  productName: Joi.string()
    .required(),
  category: Joi.string()
    .required(),
  description: Joi.string()
    .required(),
  price: Joi.number()
    .required(),
  image: Joi.string()
    .required(),
  stock: Joi.number()
    .required(),
}

const productSchema = Joi.object(joiProductSchema)

const mongooseProductSchema = new mongoose.Schema(
  joigoose.convert(productSchema)
)

module.exports = mongoose.model('product', mongooseProductSchema)
