const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.route('/signup').post(userController.signUp)
router.route('/signin').post(userController.signIn)
module.exports = router
