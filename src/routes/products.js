const { Router } = require('express')
const {
  deleteById,
  createProduct,
  getAllProducts,
  updateById
} = require('../controllers')

const routes = new Router()

routes.post('/', createProduct)

routes.get('/', getAllProducts)

routes.put('/:id', updateById)

routes.delete('/:id', deleteById)

module.exports = routes
