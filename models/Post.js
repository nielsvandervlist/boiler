import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;
