const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 p-4 text-center shadow-inner">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} StudyHub. All rights reserved.
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Built with 💻 by Ishwar
      </p>
    </footer>
  );
};

export default Footer;
