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
  data.save((error, result) => {
    if (error) {
      res.status(500).send({ message: error.message })
    } else {
      res.send(result)
    }
  })
}

module.exports = signup
