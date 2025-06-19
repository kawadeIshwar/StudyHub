import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

export default mongoose.model('User', userSchema);
// This code defines a User model for MongoDB using Mongoose.