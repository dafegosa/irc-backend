const { model, models, Schema } = require('mongoose')
//const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const msgSchema = new Schema({
  nickName: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: { type: String, required: true },
})

const Message = model('Message', msgSchema)

module.exports = Message
