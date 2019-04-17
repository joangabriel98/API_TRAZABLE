const User = require('../models/user')
const Message = require('../models/message')

module.exports = {

  indexUser: async (req, res, next) => {
    const users = await User.find({})
    res.status(200).json(users)
  },

  newUser: async (req, res, next) => {
    const newUser = new User(req.body)
    const user = await newUser.save()
    res.status(200).json(user)
  },

  indexMessage: async (req, res, next) => {
    const messages = await Message.find({})
    res.status(200).json(messages)
  },

  newMessage: async (req, res, next) => {
    const newMessage = new Message(req.body)
    const message = await newMessage.save()
    res.status(200).json(message)
  },
}
