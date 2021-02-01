const mongoose = require('mongoose')

let connection
const connect = async () => {
  if (connection) return
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  connection = mongoose.connection
  connection.once('open', () =>
    console.log('Connection established successfully')
  )
  connection.on('disconnect', () => console.log('Successfully disconnected'))
  connection.on('error', (err) => console.log('Something went wrong'))
  await mongoose.connect(
    'mongodb+srv://dafegosa:Daninanis_26453@cluster1.ulnhx.mongodb.net/irc?retryWrites=true&w=majority',
    options
  )
}
const disconnect = async () => {
  if (!connection) return
  await mongoose.disconnect()
}
const cleanUp = async () => {
  for (const collection in connection.collections) {
    await connection.collections[collection].deleteMany({})
  }
}

module.exports = { connect, disconnect, cleanUp }
