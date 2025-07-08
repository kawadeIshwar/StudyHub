import NoteCard from "../components/NoteCard";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-2xl z-0">
      <div className="bg-[#FFF86D] flex items-center min-h-[520px] m-6 md:m-14 rounded-[30px] animate-slideUp">
        <div className="flex flex-col custom-lg:flex-row w-full justify-between items-center px-6 gap-6">

          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/student-3.png"
              alt="student-3"
              className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain"
            />
          </div>

          {/* Center Text */}
          <div className="flex flex-col items-center gap-4 text-center flex-1">
            <h1 className="text-5xl md:text-9xl custom-lg:text-8xl font-bold text-[#303030] transform transition-all duration-300 ease-out hover:scale-100 hover:-translate-y-1">
              StudyHub
            </h1>
            <p className="text-lg md:text-3xl custom-lg:text-4xl text-[#f85f5f] transform transition-all duration-300 ease-out hover:scale-100 hover:-translate-y-1">
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
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>

              <button
                type="submit"
                onClick={() => (window.location.href = "/notes")}
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-emerald-500
                bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute
                before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full 
                before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 
                before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 
                overflow-hidden border-2 rounded-full group"
              >
                Explore Notes
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 
                  ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none
                  p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/student-7.png"
              alt="student-7"
              className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Popular Notes Section */}
      <div className="flex items-center flex-col rounded-[30px] w-full animate-fadeIn">
        <h1 className="p-7 font-bold text-5xl text-[#ffffff] hover:text-[#6f95b8] transform transition-all duration-300 ease-out hover:scale-100 hover:-translate-y-1">
          Popular Notes To Discover
        </h1>

        <div className="flex flex-wrap gap-9 w-full text-sm justify-center mt-5 sm:px-10 px-5">
          {[...Array(5)].map((_, i) => (
            <NoteCard
              key={i}
              title="DBMS Unit"
              subject="Database management system"
              uploader="Ishwar"
              date="June 12"
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;


