import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-[#637fa7] px-6 py-4 flex justify-between items-center z-50 text-white shadow-[0_4px_10px_0_rgba(0,0,0,1)]
">

      {/*website Logo */}
      <Link to="/"
        className="text-2xl font-bold tracking-wide hover:scale-110 transition-transform duration-300 "
        >StudyHub</Link>

      {/* Links */}
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
          <button onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login"; // Redirect to login after logout
            window.location.reload(); // refreshes the page

          }}
            className=" hover:text-black hover:underline transition"
          >
            Logout
          </button>
        )}
      </div>

    </nav>
  );
};

const NavItem = ({ to, text }) => (
  <Link
    to={to}
    className="relative transition duration-300 ease-in-out hover:text-gray-800 hover:underline underline-offset-4"
  >
    {text}
  </Link>
);

export default Navbar;
