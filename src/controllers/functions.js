// require the models of Users and Message
const User = require('../models/user')
const Message = require('../models/message')

// export the differents functions
module.exports = {

  // count quantity is the different types
  countMessage: async (req, res) => {
    try {
      // save the json of types feedback and bug
      const messagesFeedback = await Message.find({ 'message.tipo': 'feedback' })
      const messagesBug = await Message.find({ 'message.tipo': 'bug' })
      // print the count of the differents types
      res.status(200).json(`Cuenta de Feedback: ${messagesFeedback.length} -------- Cuenta de Bug ${messagesBug.length}`)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },

  // see the message with the email for user
  countMessageMail: async (req, res) => {
    try {
      // save the mail of req
      const { emailUser } = req.params
      // save the id of user
      const userMail = await User.find({ 'email': emailUser }, { '_id': 1 })
      // sample all the messages of user
      const messagesuserMail = await Message.find({ 'user': userMail })
      res.status(200).json(messagesuserMail)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },

  // count the messages that are not check
  countCheck: async (req, res) => {
    try {
      const messagesuserMail = await Message.find({ 'check': false })
      res.status(200).json(messagesuserMail)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },
  // search the word pepino in the body and text of all message
  PepinoSearch: async (req, res) => {
    try {
      let messagePepino = await Message.find({ 'message.textMessage': { $regex: /pepino/, $options: 'i' } })
      messagePepino = await Message.find({ 'message.body': { $regex: /pepino/, $options: 'i' } })
      res.status(200).json(messagePepino)
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },
  // see the three people who have sent the most messages
  ThreePerson: async (req, res) => {
    try {
      User.aggregate([{ $project: {
        'username': 1,
        'length': { '$size': '$listMessage' },

      } },
      { $sort: { 'length': -1 } },
      { $limit: 3 },
      ], function (_err, results) {
        return res.status(200).json(results)
      })
    } catch (e) {
      res.status(404).end('Syntax incorrect')
    }
  },
}
