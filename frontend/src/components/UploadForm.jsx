import { useState } from 'react';       // To manage form state
import { toast, ToastContainer } from 'react-toastify';  // Toast notifications
import 'react-toastify/dist/ReactToastify.css';
import { notesAPI } from '../utils/api';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    semester: '',
    tags: '',
    file: null,
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,  // If file input, take file
    });
  };

  // ✅ Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');  // Get token from storage
    if (!token) {
      toast.info("Please login first to upload notes.");
      setTimeout(() => {
        window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`; // Redirect to login
      }, 1500);
      return;
    }

    const data = new FormData();  // Create FormData for file upload
    data.append('title', formData.title);
    data.append('subject', formData.subject);
    data.append('semester', formData.semester);
    data.append('tags', formData.tags);
    data.append('file', formData.file);

    try {
      await toast.promise(
        notesAPI.upload(data),
        {
          pending: 'Uploading note...',  // Show toast while uploading
          success: 'Note uploaded successfully!',
          error: 'Upload failed!',
        }
      );

      // ✅ Reset form after upload
      setFormData({
        title: '',
        subject: '',
        semester: '',
        tags: '',
        file: null,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="flex bg-[#b3b3b3] mt-12 rounded-[30px] w-[1000px] h-[520px] justify-center items-center animate-slideUp ">
        <form
          onSubmit={handleSubmit}
          className="bg-white/20 backdrop-blur-md border border-white shadow-lg p-8 rounded-2xl
          w-full md:m-10 sm:m-4 sm-h-full mx-auto my-10 bg-gradient-to-tl from-[#0e0c2d] via-[#216578]
          to-[#01152b] animate-fadeIn text-blue-100 custom-lg:w-1/2 sm:w-full sm"
        >
          <h2 className="text-2xl font-bold text-center text-[#83def8] mb-6">
            Upload Notes
          </h2>

          {/* Form Inputs */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900"
            required
          />

          <input
            type="text"
            name="semester"
            placeholder="Semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900"
          />

          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            value={formData.tags}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900"
          />

          <input
            type="file"
            name="file"
            accept=".pdf,.docx,.txt"
            onChange={handleChange}
            className="w-full mb-6 text-gray-800"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Upload
          </button>
        </form>

        {/* Image beside form (for large screens only) */}
        <img
          src="student-12.png"
          alt="student"
          className="rounded-tr-[30px] rounded-br-[30px] animate-fadeIn hidden custom-lg:block h-full"
        />
      </div>
    </div>
  );
};

export default UploadForm;
