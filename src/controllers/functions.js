const User = require('../models/user')
const Message = require('../models/message')

module.exports = {

  countMessage: async (req, res, next) => {
    const messagesFeedback = await Message.find({ 'message.tipo': 'feedback' })
    const messagesBug = await Message.find({ 'message.tipo': 'bug' })
    res.status(200).json(`Cuenta de Feedback: ${messagesFeedback.length} -------- Cuenta de Bug ${messagesBug.length}`)
  },

  countMessageMail: async (req, res, next) => {
    const { emailUser } = req.params
    const userMail = await User.find({ 'email': emailUser })
    const messagesuserMail = await Message.find({ user: userMail._id })
    res.status(200).json(messagesuserMail)
  },

  countCheck: async (req, res, next) => {
    const messagesuserMail = await Message.find({ 'check': false })
    res.status(200).json(messagesuserMail)
  },

  PepinoSearch: async (req, res, next) => {
    let messagePepino = await Message.find({ 'message.textMessage': { $regex: /pepino/, $options: 'i' } })
    messagePepino = await Message.find({ 'message.body': { $regex: /pepino/, $options: 'i' } })
    res.status(200).json(messagePepino)
  },

  indexMessage: async (req, res, next) => {
    const messages = await Message.find({})
    res.status(200).json(messages)
  },

  newMessage: async (req, res, next) => {
    const { userId } = req.params
    const userMessage = await User.findById(userId)
    const MessageNew = new Message(req.body)
    MessageNew.user = userMessage._id
    await MessageNew.save()
    userMessage.listMessage.push(MessageNew)
    await userMessage.save()
    res.status(201).json(MessageNew)
  },

  idMessage: async (req, res, next) => {
    const { idMessage } = req.params
    const message = await Message.findById(idMessage)
    res.status(200).json(message)
  },

  idMessageCheck: async (req, res, next) => {
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
}
