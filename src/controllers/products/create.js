const Product = require('../../validations/ProductModelSchema')

const create = async (req, res) => {
  const data = new Product(req.body)
  data.save(error => {
    if (error) {
      res.status(500).send({ message: error.message })
    } else {
      res.send(data)
    }
  })
}

module.exports = create
