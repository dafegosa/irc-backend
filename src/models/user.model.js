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
  },
})

const User = model('User', userSchema)

module.exports = User
