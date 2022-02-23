const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://beAdmin:SH7SG7NKpN9pSA11@attendancetracker.ha9nd.mongodb.net/ecommerce?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('Mongo is ready!');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;

//SH7SG7NKpN9pSA11