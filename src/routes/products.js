const { Router } = require('express')
const {
  deleteById,
  createProduct,
  getAllProducts,
  updateById,
  getById,
  getByCategory
} = require('../controllers')

const routes = new Router()

routes.post('/', createProduct)

routes.get('/', getAllProducts)

routes.put('/:id', updateById)

routes.delete('/:id', deleteById)

routes.get('/:id', getById)

routes.get('/', getByCategory)

module.exports = routes
