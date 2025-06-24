import multer from 'multer'; // Importing multer for handling file uploads
import cloudinary from '../utils/cloudinary.js'; // Importing cloudinary for image/file storage
import Note from '../models/note.js'; 
import { Router } from 'express'; 
import fs from 'fs'; // Importing Node.js file system module for deleting files
import auth from '../middleware/auth.js'; // Importing authentication middleware to protect routes

const upload = multer({ dest: 'uploads/' }); 
const router = Router(); 

router.post('/', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "File is required!" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
    });

    const note = new Note({
  title: req.body.title,
  subject: req.body.subject,
  semester: req.body.semester,
  tags: req.body.tags?.split(',') || [],
  fileUrl: result.secure_url,
  uploader: req.user.name,
});


    await note.save();
    fs.unlink(req.file.path, () => {}); // async delete

    res.status(200).json({ message: 'Note uploaded!', note });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const notes = await Note.find().sort({ date: -1 });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

