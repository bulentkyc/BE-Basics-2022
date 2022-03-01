const mongoose = require('mongoose');

const users = new mongoose.Schema({
    email: { 
        type: String,
        unique: true
    },
    pass: String
});

//Below first users has to match with the collection name on the DB
//Second users below has to match with the constant on the line 3
//Since users on line 3 is a constant, we can name it as we wish
module.exports = mongoose.model('users', users);

//"$2b$10$t5ldLsdYkvWBY5mYdWDu0.CsA1Bsrwvu4qp41vc7RGYGOwLMxEOG2"
//"$2b$10$t5ldLsdYkvWBY5mYdWDu0.CsA1Bsrwvu4qp41vc7RGYGOwLMxEOG2"