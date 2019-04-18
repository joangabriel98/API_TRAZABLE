const User = require('../models/user')
const Message = require('../models/message')

module.exports = {

  countMessage: async (req, res) => {
    const messagesFeedback = await Message.find({ 'message.tipo': 'feedback' })
    const messagesBug = await Message.find({ 'message.tipo': 'bug' })
    res.status(200).json(`Cuenta de Feedback: ${messagesFeedback.length} -------- Cuenta de Bug ${messagesBug.length}`)
  },

  countMessageMail: async (req, res) => {
    const { emailUser } = req.params
    const userMail = await User.find({ 'email': emailUser }, { '_id': 1 })
    const messagesuserMail = await Message.find({ 'user': userMail })
    res.status(200).json(messagesuserMail)
  },

  countCheck: async (req, res) => {
    const messagesuserMail = await Message.find({ 'check': false })
    res.status(200).json(messagesuserMail)
  },

  PepinoSearch: async (req, res) => {
    let messagePepino = await Message.find({ 'message.textMessage': { $regex: /pepino/, $options: 'i' } })
    messagePepino = await Message.find({ 'message.body': { $regex: /pepino/, $options: 'i' } })
    res.status(200).json(messagePepino)
  },
}
