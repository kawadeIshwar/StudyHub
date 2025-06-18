import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar sticky top-0 bg-custom-637fa7 shadow-xl p-4 flex justify-between items-center z-50" >
            <Link to="/" className="text-xl font-bold ">StudyHub</Link>

            <div className="space-x-4 ">
                <Link to="/" className="">Home</Link>
                <Link to="/upload" className="">Upload</Link>
                <Link to="/notes" className="">Explore</Link>
                <Link to="/login" className="">Login</Link>

            </div>
        </nav>
    );
};

export default Navbar;

