const express = require('express')
const router = express.Router()

const {
  indexMessage,
  newMessage,
  idMessage,
  DeleteMessage,
  idMessageCheck,
} = require('../controllers/message')

router.get('/', indexMessage)
router.get('/:idMessage', idMessage)
router.get('/check/:idMessage', idMessageCheck)
router.delete('/:idMessage', DeleteMessage)
router.post('/:userId', newMessage)

module.exports = router
