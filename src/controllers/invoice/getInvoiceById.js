const mongoose = require('mongoose')
const Invoice = require('../../validations/InvoiceModelSchema')

const { ObjectId } = mongoose.Types

const getInvoiceById = async (req, res) => {
  const { id } = req.query.id
  if (!ObjectId.isValid(id)) {
    res.send(res.status(404).send({ message: 'factura no encontrada' }))
  }
  const data = await Invoice.findById(id)
  res.send(data)
}

module.exports = getInvoiceById
