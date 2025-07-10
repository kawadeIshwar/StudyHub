import { useState, useEffect } from 'react';   // Hooks for state and side effects
import { Link } from 'react-router-dom';       // For navigation links
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu toggle
import { toast } from 'react-toastify';        // For toast notifications
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu open/close
  const [token, setToken] = useState(localStorage.getItem('token')); // Get token from localStorage

  useEffect(() => {
    const handleStorageChange = () => {
      const savedToken = localStorage.getItem('token');
      setToken(savedToken);  // Update token if changed elsewhere
    };

    window.addEventListener('storage', handleStorageChange); // Listen for storage changes

    return () => {
      window.removeEventListener('storage', handleStorageChange); // Cleanup listener
    };
  }, []);

  const handleLogout = () => {
    toast.success('Logout successful!');  // Show logout message
    setTimeout(() => {
      localStorage.removeItem('token');   // Remove token from storage
      setToken(null);                     // Clear token state
      window.location.href = '/login';    // Redirect to login page
    }, 1500);  // Delay to show toast
  };

  const toggleMenu = () => setIsOpen(!isOpen); // Open/close mobile menu

  return (
    <nav className="navbar sticky top-0 bg-[#637fa7] px-6 py-4 flex justify-between items-center z-50 text-white shadow-[0_4px_10px_0_rgba(0,0,0,1)]">
      {/* Website Logo */}
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide hover:scale-110 transition-transform duration-300"
      >
        StudyHub
      </Link>

      {/* Desktop Links (shown only on medium screens and up) */}
      <div className="space-x-4 text-lg hidden md:flex">
        <NavItem to="/" text="Home" />
        <NavItem to="/upload" text="Upload" />
        <NavItem to="/notes" text="Explore" />
        {!token ? (
          <>
            <NavItem to="/login" text="Login" />
            <NavItem to="/signup" text="Sign up" />
          </>
        ) : (
          <button
            onClick={handleLogout}
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
          {/* Toggle between open and close icon */}
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#637fa7] shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden z-50 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <NavItem to="/" text="Home" onClick={toggleMenu} />
        <NavItem to="/upload" text="Upload" onClick={toggleMenu} />
        <NavItem to="/notes" text="Explore" onClick={toggleMenu} />
        {!token ? (
          <>
            <NavItem to="/login" text="Login" onClick={toggleMenu} />
            <NavItem to="/signup" text="Sign up" onClick={toggleMenu} />
          </>
        ) : (
          <button
            onClick={() => {
              handleLogout();
              toggleMenu(); // Close menu after logout
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

// ✅ Nav item component for links
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

