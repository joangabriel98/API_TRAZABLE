const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  userKey: { type: String, ref: 'user.username' },
  message: [ {
    body: String,
    textMessage: String,
    type: String,
  }],
  password: Boolean,
  create: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('message', messageSchema)
