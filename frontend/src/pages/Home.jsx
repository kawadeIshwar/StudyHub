import { useEffect, useState } from 'react';
import { notesAPI } from '../utils/api';
import NoteCard from "../components/NoteCard";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await notesAPI.getAll();
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
            <button disabled type="button" class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
              <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
              </svg>
              Loading Notes Please wait...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
