const router = require('express').Router()
const msgController = require('../controllers/msg.controller')

router.route('/create').post(msgController.create)
// router.route('/signin').post(msgController.signIn)
module.exports = router
