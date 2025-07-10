import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Get redirect path (or go to home if none)
  const redirectPath = new URLSearchParams(location.search).get('redirect') || '/';

  // Handle Login
const handleLogin = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });

    const token = res.data.token;
    localStorage.setItem('token', token);
    toast.success("Login Successful!");
    window.dispatchEvent(new Event("storage"));

    // Reset form data
    setEmail('');
    setPassword('');

    // Redirect after 1.5 seconds
    setTimeout(() => {
      window.location.href = '/';  // Change '/' to your home page route
    }, 2000);

  } catch (err) {
    toast.error(err.response?.data?.error || 'Login failed! Please try again.');
  }
};


  return (
    <div className="flex min-h-screen w-full justify-center items-center p-4">
      <div className="flex flex-col lg:flex-row bg-[#c0bfb4] rounded-[30px] w-full 
      max-w-5xl h-[520px] justify-center items-center shadow-xl animate-slideUp ">
        {/* Login Form */}
        <form
          className="flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 border-2 border-gray-700 rounded-[30px] 
               bg-gradient-to-tl from-[#000000] via-[#4e4e4e] to-[#000000] w-full lg:w-1/2 
               h-screen lg:h-auto lg:m-5 transition-all duration-700 hover:shadow-emerald-500 animate-fadeIn"

          onSubmit={(e) => e.preventDefault()}
          >
          <h1 className="text-5xl p-4 text-[#fff7a1]">Login</h1>
          <p className="text-gray-300 mb-4 hidden min-xs:block">
            Please enter your email and password
          </p>

          {/* Email Input */}
          <div className="relative group w-full max-w-xs mb-4">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-white bg-[#272727] rounded-xl relative z-10 outline-none 
              shadow-2xl shadow-emerald-900 placeholder-gray-400 focus:shadow-emerald-600 transition-all duration-300"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative group w-full max-w-xs mb-6">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-white bg-[#272727] rounded-xl relative z-10 outline-none 
              shadow-2xl shadow-emerald-900 placeholder-gray-400 focus:shadow-emerald-600 transition-all duration-300"
              required
            />
          </div>

          {/* Login Button */}
          <div className="relative group mb-4">
            <button
            
              onClick={handleLogin}
              
              className="relative inline-block p-px font-semibold leading-3 text-white bg-neutral-900 shadow-2xl cursor-pointer 
              rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                <div className="relative z-10 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">Login</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                  >
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </div>
              </span>
            </button>
            
          </div>

          {/* Signup Redirect */}
          <p className="text-white">
            Don't have an account?{" "}
            <a href="/Signup" className="text-emerald-400 underline">
              Sign Up
            </a>
          </p>
        </form>

        {/* Side Image */}
        <img
          src="student-10.png"
          alt="student"
          className="rounded-tr-[30px] rounded-br-[30px] animate-fadeIn hidden lg:block h-full"
        />
      </div>
    </div>
  );
};

export default Login;