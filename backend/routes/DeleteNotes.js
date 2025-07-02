import express from 'express';
import auth from '../middleware/auth.js';
import Note from '../models/Note.js';

const router = express.Router();

router.delete('/:id', auth, async (req, res) => {
  try {
    console.log("Received delete request for ID:", req.params.id);
    console.log("User from token:", req.user);

    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: 'Note not found' });

    // Handle if uploader is an object or just ID
    const uploaderId = note.uploader?._id?.toString() || note.uploader?.toString();

    console.log("Uploader ID in DB:", uploaderId);
    console.log("User ID from token:", req.user.id);

    if (uploaderId !== req.user.id) {
      return res.status(403).json({ msg: 'Not allowed to delete this note' });
    }

    await note.deleteOne();
    res.status(200).json({ msg: 'Note deleted successfully' });
  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
