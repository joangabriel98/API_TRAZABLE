const User = require('../models/user')
const Message = require('../models/message')

module.exports = {
  // sample all the users
  indexUser: async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
  },

  // create new user
  newUser: async (req, res) => {
    try {
      const newUser = new User(req.body)
      const user = await newUser.save()
      res.status(200).json(user)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },

  // sample the target user
  getUser: async (req, res) => {
    try {
      const { userMail } = req.params
      const users = await User.find({ 'email': userMail })
      res.status(200).json(users)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },

  // update user
  UpdateUser: async (req, res) => {
    try {
      const userUpdate = req.body
      const { user } = req.params
      const users = await User.findByIdAndUpdate(user, userUpdate, { new: true, useFindAndModify: false })
      users.updated = Date.now()
      await User.findByIdAndUpdate(user, users, { new: true, useFindAndModify: false })
      res.status(200).json(users)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },

  // delete user and messages related
  deleteUser: async (req, res) => {
    try {
      const { idUser } = req.params
      const user = await User.findByIdAndDelete(idUser)
      user.listMessage.forEach(async (idMessageDelete) => {
        await Message.findByIdAndDelete(idMessageDelete)
      })
      res.status(200).json(user)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },
}
