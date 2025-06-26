
import express from 'express'; // Framework to build backend
import uploadRoutes from './routes/UploadNotes.js';// Upload notes routes
import mongoose from 'mongoose'; // For MongoDB connection
import dotenv from 'dotenv'; // Load .env file variables
import cors from 'cors'; // Allow frontend to talk to backend
import authRoutes from './routes/auth.js'; // Auth (login/register) routes
import deleteRoutes from './routes/notes.js'; // Delete notes routes

dotenv.config(); // Load environment variables

const app = express(); // Create express app

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data from frontend

// Routes
app.use('/api/upload', uploadRoutes); // Notes upload route
app.use('/api/auth', authRoutes); // Auth route
app.use('/api/delete', deleteRoutes); // Delete notes route

// Error handler (for any server error)
app.use((err, req, res, next) => {
  console.error(err.stack); // Show error in terminal
  res.status(500).send('Something broke!'); // Send error to frontend
});

const PORT = process.env.PORT || 5000; // Use port from .env or 5000

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Start server
  })
  .catch((err) => console.log(err)); // Log DB connection error
