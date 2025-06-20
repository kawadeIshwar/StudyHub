import express from 'express'; // Express helps us build the backend server.
import mongoose from 'mongoose'; // Mongoose connects and works with MongoDB.
import dotenv from 'dotenv'; // Loads environment variables from the .env file
import cors from 'cors'; // Allows frontend (like React) to talk to this backend (CORS = Cross-Origin Resource Sharing).
import uploadRoute from './routes/UploadNotes.js'; // Import the route for uploading notes.
import authRoutes from './routes/auth.js'; // Import authentication routes (register, login, etc.)

dotenv.config(); // Load variables from .env (like MONGO_URI, PORT).

const app = express(); // Create an Express app.

// Middleware
app.use(cors()); // Allow cross-origin requests.
app.use(express.json()); // Parse incoming JSON data.

app.use('/api', uploadRoute); // Use the upload route for handling note uploads.

app.get('/upload', (req, res) => {
  res.send('Upload route is working!');
});

app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000.

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
