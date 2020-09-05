const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/auth')

router.post('/social-login', AuthController.SocialLogin);
router.get('/verify', AuthController.verifyEmail);
router.post('/register', AuthController.signUp);
router.post('/resend-email', AuthController.ResendEmail);
router.post('/login', AuthController.login);
router.post('/reset', AuthController.reset);
router.post('/reset-2nd', AuthController.reset2nd)
module.exports = router