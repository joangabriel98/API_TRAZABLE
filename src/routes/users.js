const express = require('express')
const router = express.Router()

const {
  indexUser,
  newUser,
} = require('../controllers/user')

router.get('/', indexUser)
router.post('/', newUser)
module.exports = router
