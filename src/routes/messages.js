const express = require('express')
const router = express.Router()

const {
  indexMessage,
  newMessage,
  idMessage,
  DeleteMessage,
  PepinoSearch,
} = require('../controllers/user')

router.get('/', indexMessage)
router.get('/message/:idMessage', idMessage)
router.get('/messagePepino', PepinoSearch)
router.delete('/:idMessage', DeleteMessage)
router.post('/message/:userId', newMessage)
module.exports = router
