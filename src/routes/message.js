const router = require('express').Router()
const msgController = require('../controllers/msg.controller')
const { auth } = require('../utils/auth')

router.route('/create').post(auth, msgController.create)
router.route('/get').get(auth, msgController.list)
// router.route('/signin').post(msgController.signIn)
module.exports = router
