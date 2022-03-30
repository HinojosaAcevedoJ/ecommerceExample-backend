const { Router } = require('express')
const {
  createInvoice,
  getInvoiceById,
  getAllInvoice
} = require('../controllers')

const routes = new Router()

routes.post('/', createInvoice)

routes.get('/:id', getInvoiceById)

routes.get('/', getAllInvoice)

module.exports = routes
