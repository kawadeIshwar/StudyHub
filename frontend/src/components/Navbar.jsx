import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar sticky top-0 bg-[#637fa7] px-6 py-4 flex justify-between items-center z-50 text-white shadow-[0_4px_10px_0_rgba(0,0,0,1)]">
      {/* Website Logo */}
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide hover:scale-110 transition-transform duration-300"
      >
        StudyHub
      </Link>

      {/* Desktop Links */}
      <div className="space-x-4 text-lg hidden md:flex">
        <NavItem to="/" text="Home" />
        <NavItem to="/upload" text="Upload" />
        <NavItem to="/notes" text="Explore" />
        {!localStorage.getItem("token") ? (
          <>
            <NavItem to="/login" text="Login" />
            <NavItem to="/signup" text="Sign up" />
          </>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
              window.location.reload();
            }}
            className="hover:text-black hover:underline transition"
          >
            Logout
          </button>
        )}
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-[#536b8e] transition duration-300"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`absolute top-full left-0 w-full bg-[#637fa7] shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden z-50 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <NavItem to="/" text="Home" onClick={toggleMenu} />
        <NavItem to="/upload" text="Upload" onClick={toggleMenu} />
        <NavItem to="/notes" text="Explore" onClick={toggleMenu} />
        {!localStorage.getItem("token") ? (
          <>
            <NavItem to="/login" text="Login" onClick={toggleMenu} />
            <NavItem to="/signup" text="Sign up" onClick={toggleMenu} />
          </>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
              window.location.reload();
            }}
            className="hover:text-black hover:underline transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

// NavItem Component
const NavItem = ({ to, text, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="relative transition duration-300 ease-in-out hover:text-gray-800 hover:underline underline-offset-4"
  >
    {text}
  </Link>
);

export default Navbar;

