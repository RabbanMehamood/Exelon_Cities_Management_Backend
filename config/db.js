require('dotenv').config(); 

const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        if (!mongoURI) {
            throw new Error('MongoDB connection string is not defined');
        }
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;
