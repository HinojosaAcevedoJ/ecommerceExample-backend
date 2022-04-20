const Product = require('../../validations/ProductModelSchema')

const getByCategory = async (req, res) => {
  const query = await Product.find({ category: req.query.category })
  res.send(query)
}

module.exports = getByCategory
