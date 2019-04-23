// require the modal of user and message
const User = require('../models/user')
const Message = require('../models/message')

// export the differents functions
module.exports = {
  // sample all the messages
  indexMessage: async (req, res) => {
    const messages = await Message.find({})
    res.status(200).json(messages)
  },
  // create a new message and push in array of target user
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
  // update the message
  UpdateMessage: async (req, res) => {
    try {
      const messageUpdate = req.body
      const { idmessage } = req.params
      const messageNew = await Message.findByIdAndUpdate(idmessage, messageUpdate, { new: true, useFindAndModify: false })
      messageNew.update = Date.now()
      await User.findByIdAndUpdate(idmessage, messageNew, { new: true, useFindAndModify: false })
      res.status(200).json(messageNew)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },
  // sample the target message
  idMessage: async (req, res) => {
    try {
      const { idMessage } = req.params
      const message = await Message.findById(idMessage)
      res.status(200).json(message)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },

  // check the target message
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

  // delete message
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
