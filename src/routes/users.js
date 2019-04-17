const express = require('express')
const router = express.Router()

const {
  indexUser,
  indexMessage,
} = require('../controllers/user')

router.get('/', indexUser)
router.get('/', indexMessage)
module.exports = router
