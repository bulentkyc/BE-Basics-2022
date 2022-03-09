const express = require('express');
const router = express.Router();

const profile = require('../controller/profileController');

router.post('/save', profile.save);

module.exports = router;