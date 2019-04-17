const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const userRoutes = require('./routes/users.js')
const messageRoutes = require('./routes/messages.js')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/API', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/users', userRoutes)
app.use('/messages', messageRoutes)

app.listen(app.get('port'))
