const { Router } = require('express')
const {
  getCategories
} = require('../controllers')

const routes = new Router()

routes.get('/', getCategories)

module.exports = routes
