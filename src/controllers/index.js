const createProduct = require('./products/create')
const getAllProducts = require('./products/getAll')
const signup = require('./auth/signup')
const login = require('./auth/login')
const deleteById = require('./products/deleteById')
const updateById = require('./products/updateById')
const getById = require('./products/getById')
const getByCategory = require('./products/getByCategory')
const getCategories = require('./products/getCategories')

module.exports = {
  createProduct,
  getAllProducts,
  signup,
  login,
  deleteById,
  updateById,
  getById,
  getByCategory,
  getCategories
}
