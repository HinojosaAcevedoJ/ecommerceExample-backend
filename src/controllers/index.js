const createProduct = require('./products/create')
const getAllProducts = require('./products/getAll')
const signup = require('./auth/signup')
const login = require('./auth/login')
const deleteById = require('./products/deleteById')
const updateById = require('./products/updateById')

module.exports = {
  createProduct,
  getAllProducts,
  signup,
  login,
  deleteById,
  updateById
}
