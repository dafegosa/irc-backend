const User = require('../models/user.model')

module.exports = {
  async create(req, res) {
    console.log(req.body)
    try {
      const user = await User.create(req.body)
      res.status(201).json({ message: 'Usuario registrado exitosamente', user })
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  },
}
