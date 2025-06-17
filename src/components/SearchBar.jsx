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
        className="flex-1 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
