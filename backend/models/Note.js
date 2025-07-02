import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: String,
  subject: String,
  semester: String,
  tags: [String],
  fileUrl: String,
  format: {
    type: String,
    required: true,
  },
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // ✅ Refers to User model
    required: true,
  },
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Note', noteSchema);

// This code defines a Note model for MongoDB using Mongoose.