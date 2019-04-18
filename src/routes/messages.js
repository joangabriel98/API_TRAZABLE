const express = require('express')
const router = express.Router()

const {
  indexMessage,
  newMessage,
  idMessage,
  DeleteMessage,
  PepinoSearch,
  idMessageCheck,
} = require('../controllers/user')

router.get('/', indexMessage)
router.get('/:idMessage', idMessage)
router.get('/check/:idMessage', idMessageCheck)
router.get('/messagePepino', PepinoSearch)
router.delete('/:idMessage', DeleteMessage)
router.post('/:userId', newMessage)
module.exports = router
