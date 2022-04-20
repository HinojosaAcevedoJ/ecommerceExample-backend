const Product = require('../../validations/ProductModelSchema')

const create = async (req, res) => {
  const data = new Product(req.body)
  /** data.save(error => {
    if (error) {
      res.status(500).send({ message: error.message })
    } else {
      res.send(data)
    }
  }) */
  const response = await data.save()
  if (response) {
    res.send(res.status(200).send({ message: 'producto agregado' }))
  } else {
    res.send(res.status(500).send({ message: 'Internal Error' }))
  }
}

module.exports = create
