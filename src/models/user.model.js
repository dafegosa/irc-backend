const { model, Schema } = require('mongoose')
//const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    //match: [emailRegex, 'Invalid Email'],
  },
  password: {
    type: String,
    required: true,
    validate: {
      async validator(email) {
        try {
          const user = await models.User.findOne({ email })
          return !user
        } catch (err) {
          return false
        }
      },
      message: 'Correo ya ha sido registrado',
    },
  },
})

const User = model('User', userSchema)

module.exports = User
