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

  getUser: async (req, res, next) => {
    const { userMail } = req.params
    const users = await User.find({ 'email': userMail })
    res.status(200).json(users)
  },

  indexMessage: async (req, res, next) => {
    const messages = await Message.find({})
    res.status(200).json(messages)
  },

  newMessage: async (req, res, next) => {
    const { userId } = req.params
    const userMessage = await User.findById(userId)
    const MessageNew = new Message(req.body)
    MessageNew.seller = userMessage
    await MessageNew.save()
    userMessage.listMessage.push(MessageNew)
    await userMessage.save()
    res.status(201).json(MessageNew)
  },

  idMessage: async (req, res, next) => {
    const { idMessage } = req.params
    const message = await Message.findById(idMessage)
    message.check = true
    await Message.findByIdAndUpdate(idMessage, message, { new: true })
    res.status(200).json(message)
  },

  DeleteMessage: async (req, res, next) => {
    const { idMessage } = req.params
    const message = await Message.findByIdAndDelete(idMessage)
    res.status(200).json(message)
  },

  PepinoSearch: async (req, res, next) => {
    const message = await Message.find({ 'message.body': { $text: { $search: 'pepino' } } })
    res.status(200).json(message)
  },
}
