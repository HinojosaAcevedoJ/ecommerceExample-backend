const mongoose = require('mongoose')

const Product = require('../../validations/ProductModelSchema')

const { ObjectId } = mongoose.Types

const deleteById = async (req, res) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    res.send(res.status(404).send({ message: 'producto no encontrado' }))
  }
  Product.deleteOne({ _id: new ObjectId(id) }).then(() => {
    res.send(res.status(200).send({ message: 'producto eliminado con exito' }))
  }).catch(err => {
    res.send(res.status(500).send({ message: err }))
  })
}

module.exports = deleteById
