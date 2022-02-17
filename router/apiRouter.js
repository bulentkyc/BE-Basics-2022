const express = require('express');
const router = express.Router();

const api = require('../controller/apiController');

router.get('/', api.home);

router.get('/iphone', api.getIphones);

module.exports = router;