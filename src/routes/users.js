const express = require('express')
const router = express.Router()

const {
  indexUser,
  newUser,
  getUser,
  indexMessage,
  newMessage,
} = require('../controllers/user')

router.get('/', indexUser)
router.get('/:userMail', getUser)
router.post('/', newUser)
router.get('/message', indexMessage)
router.post('/message/:userId', newMessage)
module.exports = router
