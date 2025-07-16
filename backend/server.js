import express from 'express';
import uploadRoutes from './routes/UploadNotes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import deleteRoutes from './routes/DeleteNotes.js';

dotenv.config();

const app = express();

// ✅ CORS setup for Netlify (replace with your actual Netlify URL)
app.use(cors({
  origin: "https://6877feb6b6314ac931a562e4--studyhub4all.netlify.app/upload", 
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/notes', deleteRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.log(err));

