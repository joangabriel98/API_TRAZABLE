const User = require('../models/user')
const Message = require('../models/message')

module.exports = {

  indexUser: async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
  },

  newUser: async (req, res) => {
    const newUser = new User(req.body)
    const user = await newUser.save()
    res.status(200).json(user)
  },

  getUser: async (req, res) => {
    const { userMail } = req.params
    const users = await User.find({ 'email': userMail })
    res.status(200).json(users)
  },

  UpdateUser: async (req, res) => {
    const userUpdate = new User(req.body)
    const { user } = req.params
    const users = await User.findByIdAndUpdate(user, userUpdate, { new: true, upsert: true })
    res.status(200).json(users)
  },

  deleteUser: async (req, res) => {
    const { idUser } = req.params
    const user = await User.findByIdAndDelete(idUser)
    user.listMessage.forEach(async (idMessageDelete) => {
      await Message.findByIdAndDelete(idMessageDelete)
    })
    res.status(200).json(user)
  },
}
