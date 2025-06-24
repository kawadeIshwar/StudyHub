import { FaRegHeart, FaEye, FaDownload } from "react-icons/fa";
const NoteCard = ({ title, subject, uploader, date, likes }) => {
  return (
    <div className="bg-gradient-to-r from-neutral-300 to-stone-400 shadow-sm hover:shadow-xl hover:shadow-gray-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-lg p-4 w-full max-w-sm flex items-center flex-col">

      <img src="notes.png" alt="notes" className="h-[100px] items-center transform transition-all duration-300 ease-out hover:scale-100 hover:-translate-y-1" />
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
      <div className="flex flex-col">
        <p className="text-sm text-gray-700">Subject: {subject}</p>
        <p className="text-sm text-gray-700">Uploaded by: {uploader}</p>
        <p className="text-sm text-gray-700">Date: {date}</p>
        <p className="text-sm text-gray-700 mt-1">Likes: {likes}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-5">
        <button
          className="flex items-center justify-center gap-2 w-28 h-10 rounded-md text-white font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-xl hover:shadow-gray-700 hover:scale-105 hover:from-gray-900 hover:to-gray-700 transition-all duration-300"
        >
          <FaEye />
          View
        </button>

        <button
          className="flex items-center justify-center gap-2 w-28 h-10 rounded-md text-white font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-xl hover:shadow-gray-700 hover:scale-105 hover:from-gray-900 hover:to-gray-700 transition-all duration-300"
        >
          <FaDownload />
          Download
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
