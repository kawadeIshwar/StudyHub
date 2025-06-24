import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import NoteCard from '../components/NoteCard';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch notes from backend
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/upload/all');
        setNotes(res.data);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };

    fetchNotes();
  }, []);

  // Filter notes based on search query
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.join(',').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 rounded-[30px] animate-slideUp">
      <SearchBar onSearch={(query) => setSearchQuery(query)} />

      <div className="flex flex-wrap gap-9 justify-center">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title}
              subject={note.subject}
              uploader={note.uploader}
              date={new Date(note.date).toLocaleDateString()}
              likes={note.likes}
            />
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">No notes found.</p>
        )}
      </div>
    </div>
  );
};

export default Notes;

