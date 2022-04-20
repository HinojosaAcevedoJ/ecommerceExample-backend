const bcrypt = require('bcryptjs')
const Auth = require('../../validations/AuthModelSchema')

const signup = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(req.body.password, salt)
  const data = new Auth({
    ...req.body,
    password: hashed,
    permission: '1'
  })
  const response = await data.save()
  if (response) {
    res.send(res.status(200).send({ message: 'Cuenta creada con exito' }))
  } else {
    res.send(res.status(500).send({ message: 'Internal Error' }))
  }
}

module.exports = signup
