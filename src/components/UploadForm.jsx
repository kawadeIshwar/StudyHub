import { useState } from 'react';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    semester: '',
    tags: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="flex bg-[#b3b3b3] m-14 rounded-[30px] w-[1000px] h-[520px] justify-center items-center animate-slideUp">

        <form
          onSubmit={handleSubmit}
          className="bg-white/20 backdrop-blur-md border border-white shadow-lg p-8 rounded-2xl
                 w-full md:m-10 sm:m-4 sm-h-full mx-auto my-10 bg-gradient-to-tl from-[#0e0c2d] via-[#216578]
                  to-[#01152b] animate-fadeIn text-blue-100 custom-lg:w-1/2"
        >
          <h2 className="text-2xl font-bold text-center text-[#83def8] mb-6">
            Upload Notes
          </h2>

          {/* Input: Title */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900"
            required
          />

          {/* Input: Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900"
            required
          />

          {/* Input: Semester */}
          <input
            type="text"
            name="semester"
            placeholder="Semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900"
          />

          {/* Input: Tags */}
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            value={formData.tags}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900"
          />

          {/* Input: File */}
          <input
            type="file"
            name="file"
            accept=".pdf"
            onChange={handleChange}
            className="w-full mb-6 text-gray-800 "
            required
          />

          {/* Button */}

          <button class="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Upload
          </button>
        </form>
        <img
          src="student-12.png"
          alt="student"
          className="rounded-tr-[30px] rounded-br-[30px] animate-fadeIn hidden custom-lg:block h-full" />        </div>
    </div>

  );
};



export default UploadForm;

