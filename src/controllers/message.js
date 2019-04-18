const User = require('../models/user')
const Message = require('../models/message')

module.exports = {

  indexMessage: async (req, res) => {
    const messages = await Message.find({})
    res.status(200).json(messages)
  },

  newMessage: async (req, res) => {
    try {
      const { userId } = req.params
      const userMessage = await User.findById(userId)
      const MessageNew = new Message(req.body)
      MessageNew.user = userMessage._id
      await MessageNew.save()
      userMessage.listMessage.push(MessageNew)
      await userMessage.save()
      res.status(201).json(MessageNew)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },

  idMessage: async (req, res) => {
    try {
      const { idMessage } = req.params
      const message = await Message.findById(idMessage)
      res.status(200).json(message)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },

  idMessageCheck: async (req, res) => {
    try {
      const { idMessage } = req.params
      const message = await Message.findById(idMessage)
      message.check = true
      await Message.findByIdAndUpdate(idMessage, message, { new: true })
      res.status(200).json(message)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },

  DeleteMessage: async (req, res) => {
    try {
      const { idMessage } = req.params
      const message = await Message.findByIdAndDelete(idMessage)
      res.status(200).json(message)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },
}
