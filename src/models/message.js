const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  message: {
    body: { type: String, minlength: 5, maxlength: 50 },
    textMessage: { type: String, minlength: 5, maxlength: 50 },
    type: { type: String, enum: ['feedback', 'bug'] },
  },
  check: Boolean,
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  create: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now },
})

module.exports = mongoose.model('message', messageSchema)
