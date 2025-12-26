const mongoose = require('mongoose');
const mongoURI = "mongodb://root:JXSDCHCizD0wAWuBCEhc6CM9@172.21.65.11:27017/MongoDBDatabase?authSource=admin";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};
module.exports = connectDB;
