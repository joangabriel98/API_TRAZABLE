const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/API', {
  useNewUrlParser: true,
})

app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(bodyParser.json())

app.listen(app.get('port'))
