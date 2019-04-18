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

  deleteUser: async (req, res, next) => {
    const { idUser } = req.params
    const user = await User.findByIdAndDelete(idUser)
    user.listMessage.forEach(async (idMessageDelete) => {
      await Message.findByIdAndDelete(idMessageDelete)
    })
    res.status(200).json(user)
  },

  PepinoSearch: async (req, res, next) => {
    const message = await Message.find({ 'message.body': { $text: { $search: 'pepino' } } })
    res.status(200).json(message)
  },
}
