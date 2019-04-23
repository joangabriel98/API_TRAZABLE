const express = require('express')
const router = express.Router()

const {
  indexMessage,
  newMessage,
  UpdateMessage,
  idMessage,
  DeleteMessage,
  idMessageCheck,
} = require('../controllers/message')

router.get('/', indexMessage)
router.put('/:idmessage', UpdateMessage)
router.get('/:idMessage', idMessage)
router.get('/check/:idMessage', idMessageCheck)
router.delete('/:idMessage', DeleteMessage)
router.post('/:userId', newMessage)

module.exports = router
