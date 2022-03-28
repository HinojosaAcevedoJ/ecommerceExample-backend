const mongoose = require('mongoose')
const Product = require('../../validations/ProductModelSchema')

const { ObjectId } = mongoose.Types

const getById = async (req, res) => {
  const { id } = req.query.id
  if (!ObjectId.isValid(id)) {
    res.send(res.status(404).send({ message: 'producto no encontrado' }))
  }
  const data = await Product.findById(id)
  res.send(data)
}

module.exports = getById
