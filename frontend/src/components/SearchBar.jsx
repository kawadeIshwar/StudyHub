import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();  // e.preventDefault() stops page refresh.
    onSearch(query); // Pass the query to parent
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 items-center w-full max-w-xl mx-auto my-6">
      <input
        type="text"
        placeholder="Search notes by title, subject, tags..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // updates query on typing.
        className="w-full sm:w-96 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 text-base text-gray-700 hover:bg-yellow-200 "
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-300 text-black font-semibold px-5 py-2 rounded-lg shadow-lg transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
