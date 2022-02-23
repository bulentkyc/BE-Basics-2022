const express = require('express');
const router = express.Router();
const auth = require('../controller/authController');

router.get('/', auth.login);
router.post('/login', auth.login);
router.get('/login', auth.test);
router.post('/register', auth.register);

module.exports = router;