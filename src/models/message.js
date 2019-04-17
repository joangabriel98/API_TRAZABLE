const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  message: {
    body: String,
    textMessage: String,
    tipo: String,
  },
  check: Boolean,
  create: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'user' },
})

module.exports = mongoose.model('message', messageSchema)
