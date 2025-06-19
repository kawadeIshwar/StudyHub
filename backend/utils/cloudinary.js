import { v2 as cloudinary } from 'cloudinary'; // Import Cloudinary (v2) to upload/manage images.
import dotenv from 'dotenv'; // Load environment variables from .env file.

dotenv.config(); // Activate dotenv so we can use process.env

// Configure Cloudinary with credentials from .env
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export default cloudinary; // Export the configured Cloudinary to use in other files.
