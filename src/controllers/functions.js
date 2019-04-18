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
    const userMail = await User.find({ 'email': emailUser }, { '_id': 1 })
    const messagesuserMail = await Message.find({ 'user': userMail })
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
}
