const express = require('express')
const router = express.Router()

const {
  countMessage,
} = require('../controllers/functions')

router.get('/count', countMessage)

module.exports = router
