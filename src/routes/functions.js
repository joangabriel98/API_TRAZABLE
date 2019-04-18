const express = require('express')
const router = express.Router()

const {
  countMessage,
  countMessageMail,
  countCheck,
} = require('../controllers/functions')

router.get('/count', countMessage)
router.get('/countCheck', countCheck)
router.get('/countMail/:emailUser', countMessageMail)

module.exports = router
