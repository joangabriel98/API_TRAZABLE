const express = require('express')
const router = express.Router()

// require the differents task of the controllers the message
const {
  indexUser,
  newUser,
  getUser,
  deleteUser,
  UpdateUser,
} = require('../controllers/user')

// use the differents methods with their rutes
router.get('/', indexUser)
router.get('/:userMail', getUser)
router.post('/', newUser)
router.put('/:user', UpdateUser)
router.delete('/:idUser', deleteUser)

// exporo router
module.exports = router
