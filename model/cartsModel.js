const mongoose = require('mongoose');

const carts = new mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    basket: Array
});

module.exports = mongoose.model('carts', carts);