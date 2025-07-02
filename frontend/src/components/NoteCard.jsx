import { FaRegHeart, FaEye, FaDownload, FaTrashAlt } from "react-icons/fa";
import DeleteIcon from '@mui/icons-material/Delete';
import { jwtDecode } from 'jwt-decode';
import axios from "axios";

const NoteCard = ({ id, title, subject, uploader, uploaderName, date, likes, fileUrl, onDelete }) => {

  // Get logged in user ID from token
  const token = localStorage.getItem("token");
  let isOwner = false;

 if (token) {
  const decoded = jwtDecode(token);
  const decodedUserId = decoded.id;

  // uploader is an object now: { _id, name }
  isOwner = decodedUserId === uploader?._id;
}


// Handle delete button
const handleDelete = async () => {
  try {
    await axios.delete(`http://localhost:5000/api/notes/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Note deleted");
    onDelete(id); // callback to remove note from Notes.jsx
  } catch (error) {
    alert("Failed to delete note");
    console.error("Delete Error:", error.response?.data || error.message);
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
      <p>Uploaded by: {uploaderName || "Unknown"}</p>
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