const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const api = require('../controller/apiController');

router.get('/', api.home);

router.get('/iphone', auth.validate, api.getIphones);

module.exports = router;