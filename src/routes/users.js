const express = require('express')
const router = express.Router()

const {
  indexUser,
  newUser,
  getUser,
  indexMessage,
  newMessage,
  idMessage,
  PepinoSearch,
} = require('../controllers/user')

router.get('/', indexUser)
router.get('/:userMail', getUser)
router.post('/', newUser)
router.get('/message', indexMessage)
router.get('/message/:idMessage', idMessage)
router.get('/messagePepino', PepinoSearch)
router.post('/message/:userId', newMessage)
module.exports = router
