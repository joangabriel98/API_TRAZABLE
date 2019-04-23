const express = require('express')
const router = express.Router()

// require the differents task of the controllers the functions
const {
  countMessage,
  countMessageMail,
  countCheck,
  PepinoSearch,
  ThreePerson,
} = require('../controllers/functions')

// use the differents methods with their rutes
router.get('/count', countMessage)
router.get('/three', ThreePerson)
router.get('/countCheck', countCheck)
router.get('/pepino', PepinoSearch)
router.get('/countMail/:emailUser', countMessageMail)

// export the module
module.exports = router
