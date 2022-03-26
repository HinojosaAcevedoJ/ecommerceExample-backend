require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const products = require('./routes/products')
const auth = require('./routes/auth')

const { URL_MONGODB } = process.env

const app = express()
const PORT = process.env.PORT || 4000

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose
  .connect(URL_MONGODB, { useNewUrlParser: true })
  .then(() => {
    app.use('/products', products)
    app.use('/auth', auth)
    app.listen(PORT, () => {
      console.log('El servidor está inicializado en el puerto 4000')
    })
  })
