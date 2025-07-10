import { FaDownload } from "react-icons/fa";   // Download icon
import DeleteIcon from '@mui/icons-material/Delete'; // Delete icon
import { jwtDecode } from 'jwt-decode';       // Decode JWT token
import axios from "axios";                    // For API requests
import { toast } from 'react-toastify';       // For toast messages
import 'react-toastify/dist/ReactToastify.css';

const NoteCard = ({ id, title, subject, uploader, uploaderName, date, likes, fileUrl, format, onDelete }) => {
  const token = localStorage.getItem("token");
  let isOwner = false;

  if (token) {
    const decoded = jwtDecode(token);        // Decode token to get user ID
    const decodedUserId = decoded.id;
    isOwner = decodedUserId === uploader?._id; // Check if current user is uploader
  }

  // ✅ Download Handler
  const handleDownload = async () => {
    try {
      const res = await axios.get(fileUrl, { responseType: 'blob' }); // Fetch file as blob (binary)

      const blob = new Blob([res.data], { type: res.headers['content-type'] }); // Create blob from data

      const link = document.createElement('a');  // Create a hidden link
      link.href = URL.createObjectURL(blob);     // Set blob URL as link
      link.download = `${title}.${format}`;      // Set download filename
      document.body.appendChild(link);
      link.click();                              // Auto-click to download
      link.remove();                             // Remove link after download
      console.log(fileUrl);
      toast.success("Note Downloaded!");
    } catch (error) {
      console.error(error);
      toast.error("Download failed!");
    }
  };

  // ✅ Delete Handler
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }, // Send token for auth
      });
      toast.success("Note deleted");
      onDelete(id);  // Call parent to remove note from UI
    } catch (error) {
      toast.error("Failed to delete note");
      console.error("Delete Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-neutral-300 to-stone-400 shadow-sm hover:shadow-xl hover:shadow-gray-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-lg p-4 w-full max-w-sm flex items-center flex-col">
      <img src="notes.png" alt="notes" className="h-[100px] items-center transform transition-all duration-300 ease-out hover:scale-100 hover:-translate-y-1" />
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
      <div className="flex flex-col text-sm text-gray-700">
        <p>Subject: {subject}</p>
        <p>Uploaded by: {uploaderName || "Unknown"}</p>
        <p>Date: {date}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {/* ✅ Download Button */}
        <button
          onClick={handleDownload}
          className="flex items-center justify-center gap-2 w-36 h-10 rounded-md text-white font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-xl hover:scale-105 transition-all duration-300"
        >
          <FaDownload />
          Download
        </button>
      </div>

      {/* ✅ Delete Button (Owner Only) */}
      {isOwner && (
        <button
          onClick={handleDelete}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition"
          title="Delete this note"
        >
          <DeleteIcon />
        </button>
      )}
    </div>
  );
};

export default NoteCard;
// This component displays a note card with details like title, subject, uploader, and date
// It includes a download button to fetch the note file and a delete button for the owner
// The download button fetches the file as a blob and triggers a download
// The delete button sends a request to the server to remove the note and updates the UI accordingly
// It uses JWT decoding to check if the current user is the owner of the note