
import multer from 'multer'; // For handling file uploads
import cloudinary from '../utils/cloudinary.js'; // Cloudinary config for uploading files
import Note from '../models/note.js'; // Note model (MongoDB schema)
import { Router } from 'express'; // Import Router from Express
import fs from 'fs'; // For deleting temporary files


const upload = multer({ dest: 'uploads/' }); // Save uploaded files temporarily in 'uploads/' folder
const router = Router(); // Create a router instance


// POST route to upload a note
router.post('/upload', upload.single('file'), async (req, res) => {

  try {
    // Upload file to Cloudinary (as raw file like PDF)
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
    });

  
    // Create new Note using data from request
    const note = new Note({
      title: req.body.title,
      subject: req.body.subject,
      semester: req.body.semester,
      tags: req.body.tags.split(','), // Convert comma-separated tags to array
      fileUrl: result.secure_url, // Cloudinary file URL
      uploader: req.body.uploader || "Unknown", // Default uploader if not given
    });

    await note.save(); // Save note to MongoDB
    fs.unlinkSync(req.file.path); // Delete file from local 'uploads/' folder

    res.status(200).json({ message: 'Note uploaded!', note }); // Send success response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
    console.log(error);
  }
});

export default router; // Export router to use in other files
