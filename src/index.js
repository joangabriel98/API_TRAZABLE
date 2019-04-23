// require the differents modules of npm
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

// require the archives routes of the different points in the project
const userRoutes = require('./routes/users.js')
const messageRoutes = require('./routes/messages')
const functionRoutes = require('./routes/functions')


// mongoose.Promise = global.Promise

// connect the API to my database of mongoDB
mongoose.connect('mongodb://localhost/API', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

// configure for work in the port 3000
app.set('port', process.env.PORT || 3000)

// use the module morgan for see the connection hhtp
// use the module bodyParser for read the archive json
app.use(morgan('dev'))
app.use(bodyParser.json())

// call the differents functions
app.use('/users', userRoutes)
app.use('/messages', messageRoutes)
app.use('/functions', functionRoutes)

// listen connection
app.listen(app.get('port'))
