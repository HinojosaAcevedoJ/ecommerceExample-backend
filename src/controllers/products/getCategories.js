const Product = require('../../validations/ProductModelSchema')

const getCategories = async (_req, res) => {
  const data = await Product.distinct('category')
  res.send(data)
}

module.exports = getCategories
