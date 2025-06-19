const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 shadow-inner mt-12 p-6 text-center rounded-t-2xl">
      <p className="text-sm text-gray-700 tracking-wide">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-600">StudyHub</span>. All rights reserved.
      </p>
      <p className="text-xs text-gray-600 mt-1">
        Built with <span className="hover:animate-pulse">💻</span> by <span className="font-medium text-purple-600 hover:underline">Ishwar</span>
      </p>
      <p className="text-xs text-gray-600 mt-1">
        StudyHub helps students share and explore notes easily.

      </p>
    </footer>
  );
};

export default Footer;
