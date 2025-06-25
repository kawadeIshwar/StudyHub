import express from 'express';
import auth from '../middleware/auth.js';
import Note from '../models/Note.js';

const router = express.Router();

router.delete('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: 'Note not found' });

    if (note.uploader.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not allowed' });
    }

    await note.deleteOne();
    res.status(200).json({ msg: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
