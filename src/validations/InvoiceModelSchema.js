const mongoose = require('mongoose')
const joigoose = require('joigoose')(mongoose)
const Joi = require('joi')

const joiInvoiceSchema = {
  cartItems: Joi.array().items(Joi.string())
    .required(),
  cartItemsName: Joi.array().items(Joi.string())
    .required(),
  itemsQuantity: Joi.array().items(Joi.number())
    .required(),
  itemPrice: Joi.array().items(Joi.number())
    .required(),
  cartPrice: Joi.number()
    .required()
}

const invoiceSchema = Joi.object(joiInvoiceSchema)

const mongooseInvoiceSchema = new mongoose.Schema(
  joigoose.convert(invoiceSchema)
)

module.exports = mongoose.model('invoice', mongooseInvoiceSchema)
