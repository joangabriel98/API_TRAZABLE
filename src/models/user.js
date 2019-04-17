const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const userSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  create: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  listMessage: [{
    type: Schema.Types.ObjectId,
    ref: 'message',
  }],
})

module.exports = mongoose.model('User', userSchema)
