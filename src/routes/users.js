const express = require('express')
const router = express.Router()

const {
  indexUser,
  newUser,
  getUser,
  deleteUser,
} = require('../controllers/user')

router.get('/', indexUser)
router.get('/:userMail', getUser)
router.post('/', newUser)
router.delete('/:idUser', deleteUser)

module.exports = router
