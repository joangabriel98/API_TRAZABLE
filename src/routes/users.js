const express = require('express')
const router = express.Router()

const {
  indexUser,
  newUser,
  getUser,
  deleteUser,
  UpdateUser,
} = require('../controllers/user')

router.get('/', indexUser)
router.get('/:userMail', getUser)
router.post('/', newUser)
router.put('/:user', UpdateUser)
router.delete('/:idUser', deleteUser)

module.exports = router
