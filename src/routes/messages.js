const express = require('express')
const router = express.Router()

// require the differents task of the controllers the message
const {
  indexMessage,
  newMessage,
  UpdateMessage,
  idMessage,
  DeleteMessage,
  idMessageCheck,
} = require('../controllers/message')

// use the differents methods with their rutes
router.get('/', indexMessage)
router.put('/:idmessage', UpdateMessage)
router.get('/:idMessage', idMessage)
router.get('/check/:idMessage', idMessageCheck)
router.delete('/:idMessage', DeleteMessage)
router.post('/:userId', newMessage)

// export router
module.exports = router
