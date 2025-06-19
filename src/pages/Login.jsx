const Login = () => {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="flex bg-[#c0bfb4] m-14 rounded-[30px] w-[1000px] h-[520px] ">
        
        <form
          className="flex flex-col items-center justify-center p-16 border-2 mx-10 my-6 border-blue-900 rounded-[30px] 
          bg-gradient-to-tl from-[#000000] via-[#4e4e4e] to-[#000000]
          transition-all duration-700  hover:shadow-emerald-500 animate-fadeIn 
          w-full custom-lg:w-1/2"
        >
          <h1 className="text-5xl p-4 text-[#fff7a1]">Login</h1>
          <p className="text-gray-300 mb-4 hidden min-xs:block">Please enter your username and password</p>

          {/*Input 1 */}
          <div className="relative group w-full max-w-xs mb-4">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 text-white bg-[#272727] rounded-xl relative z-10 outline-none 
              shadow-2xl shadow-emerald-900 placeholder-gray-400 focus:shadow-emerald-600 transition-all duration-300"
            />
          </div>

          {/*Input 2 */}
          <div className="relative group w-full max-w-xs mb-6">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 text-white bg-[#272727] rounded-xl relative z-10 outline-none 
              shadow-2xl shadow-emerald-900 placeholder-gray-400 focus:shadow-emerald-600 transition-all duration-300"
            />
          </div>

          {/* Button */}
          <div className="relative group mb-4">
            <button
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

          <p className="text-white">
            Don't have an account? <a href="/Signup" className="text-emerald-400 underline">Sign Up</a>
          </p>
        </form>

        {/* Side Image */}
        <img
         src="student-10.png"
         alt="student"
         className="rounded-tr-[30px] rounded-br-[30px] animate-fadeIn hidden custom-lg:block h-full" />
      </div>
    </div>
  );
};

export default Login;
