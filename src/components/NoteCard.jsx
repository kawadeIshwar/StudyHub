const NoteCard = ({ title, subject, uploader, date, likes }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm flex items-center flex-col">

      <img src="notes.png" alt="notes" className="h-[100px] items-center transform transition-all duration-300 ease-out hover:scale-100 hover:-translate-y-1" />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">Subject: {subject}</p>
        <p className="text-sm text-gray-500">Uploaded by: {uploader}</p>
        <p className="text-sm text-gray-500">Date: {date}</p>
        <p className="text-sm text-gray-500 mt-1">Likes: {likes}</p>
      </div>

<div className="flex m-5 gap-7 flex-wrap">
      <button
        class="flex justify-center items-center  w-28 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
      >
        View
      </button>

      <button
        class="flex justify-center items-center w-28 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
      >
        Download
      </button>
</div>
    </div>
  );
};

export default NoteCard;
