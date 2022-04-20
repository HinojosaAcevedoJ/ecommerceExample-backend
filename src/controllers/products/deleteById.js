const mongoose = require('mongoose')

const Product = require('../../validations/ProductModelSchema')

const { ObjectId } = mongoose.Types

const deleteById = async (req, res) => {
  const { id } = req.params
  /** if (!ObjectId.isValid(id)) {
    res.send(res.status(404).send({ message: 'producto no encontrado' }))
  }
  Product.deleteOne({ _id: new ObjectId(id) }).then(() => {
    res.send(res.status(200).send({ message: 'producto eliminado con exito' }))
  }).catch(err => {
    res.send(res.status(500).send({ message: err }))
  }) */
  const response = await Product.deleteOne({ _id: new ObjectId(id) })
  console.log(response)
  if (response) {
    res.send(res.status(200).send({ message: 'producto eliminado' }))
  } else {
    res.send(res.status(404).send({ message: 'producto no encontrado' }))
  }
}

module.exports = deleteById
