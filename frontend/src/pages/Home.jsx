import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from "../components/NoteCard";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('https://studyhub-backend-kxxh.onrender.com/api/upload/all');
        setNotes(res.data.slice(0, 5)); 
      } catch (err) {
        console.error("Failed to load notes", err);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-2xl z-0">
      {/* Hero Section */}
      <div className="bg-[#FFF86D] flex items-center min-h-[520px] m-6 md:m-14 rounded-[30px] animate-slideUp">
        <div className="flex flex-col custom-lg:flex-row w-full justify-between items-center px-6 gap-6">
          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <img src="/student-3.png" alt="student-3" className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain" />
          </div>

          {/* Center Text */}
          <div className="flex flex-col items-center gap-4 text-center flex-1">
            <h1 className="text-5xl md:text-9xl custom-lg:text-8xl font-bold text-[#303030]">
              StudyHub
            </h1>
            <p className="text-lg md:text-3xl custom-lg:text-4xl text-[#f85f5f]">
              Share & Discover Notes
            </p>

            <div className="flex gap-4 flex-col sm:flex-row">
              <button
                onClick={() => (window.location.href = "/upload")}
                type="button"
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50
                backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute
                before:w-full before:transition-all before:duration-700 before:hover:w-full
                before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500
                text-blue-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150
                before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                Upload Notes
              </button>

              <button
                onClick={() => (window.location.href = "/notes")}
                type="button"
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-emerald-500
                bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute
                before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full
                before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10
                before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2
                overflow-hidden border-2 rounded-full group"
              >
                Explore Notes
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img src="/student-7.png" alt="student-7" className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Popular Notes Section */}
      <div className="flex items-center flex-col rounded-[30px] w-full animate-fadeIn">
        <h1 className="p-7 font-bold text-5xl text-[#ffffff] hover:text-[#6f95b8]">
          Popular Notes To Discover
        </h1>

        <div className="flex flex-wrap gap-9 w-full text-sm justify-center mt-5 sm:px-10 px-5">
          {notes.length > 0 ? (
            notes.map((note) => (
              <NoteCard
                key={note._id}
                id={note._id}
                title={note.title}
                subject={note.subject}
                uploaderName={note.uploader?.name}
                date={new Date(note.date).toLocaleDateString()}
                likes={note.likes}
                fileUrl={note.fileUrl}
                format={note.format}
              />
            ))
          ) : (
            <p className="text-white text-lg">No notes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
