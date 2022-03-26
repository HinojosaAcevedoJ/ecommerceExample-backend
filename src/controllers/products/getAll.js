const Product = require('../../validations/ProductModelSchema')

const getAll = async (_req, res) => {
  const data = await Product.find()
  res.send(data)
}

module.exports = getAll
