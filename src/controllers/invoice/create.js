const Invoice = require('../../validations/InvoiceModelSchema')

const createInvoice = async (req, res) => {
  const data = new Invoice(req.body)
  const response = await data.save()
  if (response) {
    res.send(res.status(200).send({ message: 'Factura creada' }))
  } else {
    res.send(res.status(500).send({ message: 'Internal Error' }))
  }
}

module.exports = createInvoice
