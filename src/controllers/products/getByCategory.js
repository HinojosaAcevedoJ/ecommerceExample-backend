const Product = require('../../validations/ProductModelSchema')

const getAll = async (req, res) => {
  const query = await Product.find({ category: req.query.category })
  res.send(query)
}

module.exports = getAll
