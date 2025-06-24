import { FaRegHeart, FaEye, FaDownload, FaTrashAlt } from "react-icons/fa";
import DeleteIcon from '@mui/icons-material/Delete';
import { jwtDecode } from 'jwt-decode';
import axios from "axios";
import { toast } from "react-toastify";

const NoteCard = ({ id, title, subject, uploader, date, likes, fileUrl, onDelete }) => {
  // Get logged in user ID from token
  const token = localStorage.getItem("token");
  let isOwner = false;

  if (token) {
    const decoded = jwtDecode(token);
    isOwner = decoded.id === (uploader && uploader._id ? uploader._id : uploader);
    console.log("Token decoded user ID:", decoded?.id);
    console.log("Uploader:", uploader);
    console.log("Is Owner?", isOwner);
  }

  // Handle delete button
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization: token },
      });
      alert("Note deleted");
      onDelete(id); // callback to remove note from Notes.jsx
    } catch (error) {
      alert("Failed to delete note");
    }

  };


  return (
    <div className="relative bg-gradient-to-r from-neutral-300 to-stone-400 shadow-sm hover:shadow-xl hover:shadow-gray-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-lg p-4 w-full max-w-sm flex items-center flex-col">
      {/* Note image */}
      <img
        src="notes.png"
        alt="notes"
        className="h-[100px] items-center transform transition-all duration-300 ease-out hover:scale-100 hover:-translate-y-1"
      />

      {/* Note details */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
      <div className="flex flex-col text-sm text-gray-700">
        <p>Subject: {subject}</p>
        <p>Uploaded by: {uploader?.name || uploader || "Unknown"}</p>
        <p>Date: {date}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-28 h-10 rounded-md text-white font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-xl hover:scale-105 hover:from-gray-900 hover:to-gray-700 transition-all duration-300"
        >
          <FaEye />
          View
        </a>

        <a
          href={fileUrl}
          download
          className="flex items-center justify-center gap-2 w-28 h-10 rounded-md text-white font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-xl hover:scale-105 hover:from-gray-900 hover:to-gray-700 transition-all duration-300"
        >
          <FaDownload />
          Download
        </a>
      </div>

      {/* Delete button if user is uploader */}
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

