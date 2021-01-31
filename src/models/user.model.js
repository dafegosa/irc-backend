const { model, models, Schema } = require('mongoose')
//const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      async validator(email) {
        console.log('VALIDATOR', email)
        try {
          const user = await models.User.findOne({ email })
          console.log('USER VALID', user)
          return !user
        } catch (err) {
          return false
        }
      },
      message: 'Correo ya ha sido registrado',
    },
  },
  password: {
    type: String,
    required: true,
  },
  nickName: { type: String, required: true },
})

const User = model('User', userSchema)

module.exports = User
