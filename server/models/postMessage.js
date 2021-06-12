import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    money: Number,
    category: String,
    comment: String,
    createdAt: Date,
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;