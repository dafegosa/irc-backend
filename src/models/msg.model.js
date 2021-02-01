const { model, models, Schema } = require('mongoose')
//const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

const msgSchema = new Schema({
  nickName: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: false,
  },
  date: { type: String, required: true },
  img: { type: String, required: false },
})

const Message = model('Message', msgSchema)

module.exports = Message
