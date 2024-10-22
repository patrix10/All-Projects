import mongoose from 'mongoose';

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;