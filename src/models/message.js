const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  message: {
    body: String,
    textMessage: String,
    tipo: String,
  },
  check: Boolean,
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  create: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now },
})

module.exports = mongoose.model('message', messageSchema)
