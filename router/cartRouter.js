const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const carts = require('../controller/cartsController');

router.post('/save', auth.validate, carts.save);
router.get('/get', auth.validate, carts.getCart);

module.exports = router;