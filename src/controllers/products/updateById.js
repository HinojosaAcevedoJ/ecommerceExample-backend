const mongoose = require('mongoose')

const Product = require('../../validations/ProductModelSchema')

const { ObjectId } = mongoose.Types

const updateById = async (req, res) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    res.send(res.status(404).send({ message: 'producto no encontrado' }))
  }

  const payload = req.body

  const response = await Product.findByIdAndUpdate(ObjectId(id), payload)
  console.log(response)
}

module.exports = updateById
