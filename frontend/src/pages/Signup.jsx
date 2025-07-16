import { useState } from 'react';    // To manage form data
import { toast } from 'react-toastify';  // For toast messages
import 'react-toastify/dist/ReactToastify.css';
import { authAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const res = await authAPI.signup(formData);
      toast.success('Registered successfully!');

      setFormData({ name: '', email: '', password: '' }); // Reset form

      // ✅ Redirect to login page after 1.5 sec
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      console.error('Signup error:', err);
      toast.error(err.response?.data?.msg || err.response?.data?.error || 'Signup failed!');
    }
  };

  return (
    <div className="flex min-h-screen w-full justify-center items-center p-4">
      <div className="flex flex-col lg:flex-row bg-[#c0bfb4] rounded-[30px] w-full 
      max-w-5xl h-[520px] justify-center items-center shadow-xl animate-slideUp ">
        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-8 sm:p-12 border-2 border-gray-700 rounded-[30px] 
               bg-gradient-to-tl from-[#000000] via-[#4e4e4e] to-[#000000] w-full lg:w-1/2 
               h-screen lg:h-auto lg:m-5 transition-all duration-700 hover:shadow-emerald-500 animate-fadeIn"
        >
          <h1 className="text-4xl p-4 text-[#fff7a1]">Sign up</h1>
          <p className="text-gray-300 mb-4 hidden min-xs:block">
            Please enter your username, email and password
          </p>

          {/* Name Input */}
          <div className="relative group w-full max-w-xs mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Username"
              required
              className="w-full px-4 py-2 text-white bg-[#272727] rounded-xl relative z-10 outline-none 
              shadow-2xl shadow-emerald-900 placeholder-gray-400 focus:shadow-emerald-600 transition-all duration-300"
            />
          </div>

          {/* Email Input */}
          <div className="relative group w-full max-w-xs mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 text-white bg-[#272727] rounded-xl relative z-10 outline-none 
              shadow-2xl shadow-emerald-900 placeholder-gray-400 focus:shadow-emerald-600 transition-all duration-300"
            />
          </div>

          {/* Password Input */}
          <div className="relative group w-full max-w-xs mb-6">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2 text-white bg-[#272727] rounded-xl relative z-10 outline-none 
              shadow-2xl shadow-emerald-900 placeholder-gray-400 focus:shadow-emerald-600 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <div className="relative group mb-4">
            <button
              type="submit"
              className="relative inline-block p-px font-semibold leading-3 text-white bg-neutral-900 shadow-2xl cursor-pointer 
              rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
            >
              <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                <div className="relative z-10 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">Sign up</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </div>
              </span>
            </button>
          </div>

          {/* Link to Login Page */}
          <p className="text-white">
            Already have an account?{' '}
            <a href="/Login" className="text-emerald-400 underline">
              Login
            </a>
          </p>
        </form>

        {/* Side Image */}
        <img
          src="student-9.png"
          alt="student"
          className="rounded-tr-[30px] rounded-br-[30px] animate-fadeIn hidden lg:block h-full"
        />
      </div>
    </div>
  );
};

export default Signup;
