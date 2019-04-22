const express = require('express')
const router = express.Router()

const {
  countMessage,
  countMessageMail,
  countCheck,
  PepinoSearch,
  ThreePerson,
} = require('../controllers/functions')

router.get('/count', countMessage)
router.get('/three', ThreePerson)
router.get('/countCheck', countCheck)
router.get('/pepino', PepinoSearch)
router.get('/countMail/:emailUser', countMessageMail)

module.exports = router
