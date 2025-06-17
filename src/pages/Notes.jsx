import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
    // Later: filter notes based on this
  };

  return (
    <div className="p-6 bg-slate-400 m-12 rounded-[30px]">
      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-wrap gap-6 justify-center ">
        <NoteCard
          title="DBMS Unit 1"
          subject="Database management system"
          uploader="Ishwar"
          date="June 12"
          likes={7}
        />
        {/* Add filter logic later */}

        <NoteCard
          title="DBMS Unit 1"
          subject="Database management system"
          uploader="Ishwar"
          date="June 12"
          likes={7}
        />
        {/* Add filter logic later */}

        <NoteCard
          title="DBMS Unit 1"
          subject="Database management system"
          uploader="Ishwar"
          date="June 12"
          likes={7}
        />
        {/* Add filter logic later */}

        <NoteCard
          title="DBMS Unit 1"
          subject="Database management system"
          uploader="Ishwar"
          date="June 12"
          likes={7}
        />
        {/* Add filter logic later */}

        <NoteCard
          title="DBMS Unit 1"
          subject="Database management system"
          uploader="Ishwar"
          date="June 12"
          likes={7}
        />
        {/* Add filter logic later */}

        <NoteCard
          title="DBMS Unit 1"
          subject="Database management system"
          uploader="Ishwar"
          date="June 12"
          likes={7}
        />
        {/* Add filter logic later */}
      </div>
    </div>
  );
};

export default Notes;
