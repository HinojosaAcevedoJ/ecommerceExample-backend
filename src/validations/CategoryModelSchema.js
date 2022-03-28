const mongoose = require('mongoose')
const joigoose = require('joigoose')(mongoose)
const Joi = require('joi')

const joiCategorySchema = {
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

const categorySchema = Joi.object(joiCategorySchema)

const mongooseCategorySchema = new mongoose.Schema(
  joigoose.convert(categorySchema)
)

module.exports = mongoose.model('category', mongooseCategorySchema)
