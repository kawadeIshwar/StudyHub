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
    <div className="p-6 rounded-[30px] animate-slideUp">
      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-wrap gap-9 justify-center ">
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
