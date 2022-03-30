const Invoice = require('../../validations/InvoiceModelSchema')

const getAllInvoice = async (_req, res) => {
  const data = await Invoice.find()
  res.send(data)
}

module.exports = getAllInvoice
