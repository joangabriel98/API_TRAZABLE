const express = require('express')
const router = express.Router()

const {
  indexMessage,
  newMessage,
} = require('../controllers/user')

router.get('/', indexMessage)
router.post('/', newMessage)

module.exports = router
