const Invoice = require('../../validations/InvoiceModelSchema')

const createInvoice = async (req, res) => {
  const data = new Invoice(req.body)
  console.log(data, req.body)
  data.save(error => {
    if (error) {
      res.status(500).send({ message: error.message })
    } else {
      res.send(data)
    }
  })
}

module.exports = createInvoice
