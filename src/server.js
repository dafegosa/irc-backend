const { connect, disconnect } = require('./db')
const app = require('./app')

const port = process.env.PORT

connect()

app.listen(port, () => {
  console.log(`Successfully running at http:localhost/${port}`)
})
