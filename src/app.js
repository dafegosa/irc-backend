const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
const userRouter = require('./routes/user')
const msgRouter = require('./routes/message')

const app = express()

app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/user', userRouter)
app.use('/msg', msgRouter)
module.exports = app
