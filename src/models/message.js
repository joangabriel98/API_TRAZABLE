const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  userKey: { type: String, ref: 'user.username' },
  message: {
    body: String,
    textMessage: String,
    type: String,
  },
  check: Boolean,
  create: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now },
})

module.exports = mongoose.model('message', messageSchema)
