const Message = require('../models/msg.model')

module.exports = {
  async create(req, res) {
    const data = req.body
    console.log('LA DATA DEL MESSAGE  =>  ', data)
    try {
      const message = await Message.create(data)
      res.status(201).json({ message: 'subTicket created!', data: message })
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong!', data: err })
    }
  },
  async list(req, res) {
    try {
      const messages = await Message.find()
      res.status(200).json({
        message: 'Data found',
        messages,
      })
    } catch (err) {
      res.status(400).json({ message: 'Email not found', data: err })
    }
  },
  // async list(req, res) {
  //   try {
  //     const thisId = req.body.thisId
  //     const subTickets = await SubTicket.find({ ticketFather: thisId })
  //     res.status(200).json({
  //       message: 'SubTickets found',
  //       data: subTickets,
  //     })
  //   } catch (err) {
  //     res.status(400).json({ message: 'Email not found', data: err })
  //   }
  // },
}
