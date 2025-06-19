import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: String,
  subject: String,
  semester: String,
  tags: [String],
  fileUrl: String,
  uploader: String,
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Note', noteSchema);
// This code defines a Note model for MongoDB using Mongoose.