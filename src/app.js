const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
const userRouter = require('./routes/user')

const app = express()
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/user', userRouter)
module.exports = app
