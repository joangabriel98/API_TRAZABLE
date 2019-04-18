const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  message: {
    body: { type: String, maxlength: 50 },
    textMessage: String,
    type: { type: String },
  },
  check: Boolean,
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  create: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now },
})

module.exports = mongoose.model('message', messageSchema)
