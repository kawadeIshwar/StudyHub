import express from 'express';          // To create routes
import auth from '../middleware/auth.js'; // Middleware to check token (auth)
import Note from '../models/Note.js';     // Import Note model (MongoDB schema)

const router = express.Router();         // Create a router object

// ✅ DELETE NOTE API (Protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    console.log("Received delete request for ID:", req.params.id);
    console.log("User from token:", req.user);

    const note = await Note.findById(req.params.id); // Find note by ID
    if (!note) return res.status(404).json({ msg: 'Note not found' });

    // Get uploader ID (handle if uploader is object or plain ID)
    const uploaderId = note.uploader?._id?.toString() || note.uploader?.toString();

    console.log("Uploader ID in DB:", uploaderId);
    console.log("User ID from token:", req.user.id);

    if (uploaderId !== req.user.id) {
      // Check if logged-in user is note owner
      return res.status(403).json({ msg: 'Not allowed to delete this note' });
    }

    await note.deleteOne(); // Delete note from DB
    res.status(200).json({ msg: 'Note deleted successfully' }); // Send success response
  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ error: err.message }); // Handle errors
  }
});

export default router; // Export router
// This code defines a DELETE API endpoint to delete a note by its ID.
// It checks if the user is authenticated and if they are the owner of the note before allowing deletion.
// If the note is not found or the user is not authorized, it returns appropriate error messages.
// If successful, it deletes the note and returns a success message.