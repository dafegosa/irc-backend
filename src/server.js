const { connect, disconnect } = require('./db')
const dotenv = require('dotenv').config()
const app = require('./app')
const SocketIO = require('socket.io')
const http = require('http')

const port = process.env.PORT || 8000
const server = http.createServer(app)
const io = SocketIO(server, {
  cors: {
    origin: 'https://irc.dafegosa.vercel.app',
    methods: ['GET', 'POST'],
  },
})

console.log('ok')
connect()
io.on('connection', (socket) => {
  socket.emit('welcome', { message: 'New User Connected' })
  socket.on('msg', (data) => {
    io.emit('broadcast', data)
  })
  socket.on('disconnect', () => console.log('User Disconnected'))
})
server.listen(port, () => {
  console.log(`Successfully running at http:localhost/${port}`)
})
