import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  description: String,
  imageUrl: String
});

export default mongoose.model('posts', postSchema);
