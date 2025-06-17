import { useState } from 'react';


 //creating a state called formData.
const UploadForm = () => {       
  const [formData, setFormData] = useState({ 
    title: '',
    subject: '',
    semester: '',
    tags: '',
    file: null,  
  });   //It stores 5 values: title, subject, semester, tags, and file (PDF).


  // This function updates the form when user types or uploads a file:
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({                              
      ...formData,                              
      [name]: files ? files[0] : value,  //If the input is a file, it saves files[0] (PDF file).Otherwise, it saves the typed text value.
    });
  };

  //This runs when the user clicks the submit button.
  const handleSubmit = (e) => {
    e.preventDefault();  // e.preventDefault() stops the page from refreshing.
    console.log('Form submitted:', formData);
   
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-lg w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Upload Notes</h2>

       {/* input text */}
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full mb-3 px-3 py-2 border rounded"
        required
      />
      {/* input subject */}
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full mb-3 px-3 py-2 border rounded"
        required
      />
      {/* input semester */}
      <input
        type="text"
        name="semester"
        placeholder="Semester"
        value={formData.semester}
        onChange={handleChange}
        className="w-full mb-3 px-3 py-2 border rounded"
      />
      {/* input tags */}
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        value={formData.tags}
        onChange={handleChange}
        className="w-full mb-3 px-3 py-2 border rounded"
      />
      {/* input file */}
      <input
        type="file"
        name="file"
        accept=".pdf"
        onChange={handleChange}
        className="w-full mb-4"
        required
      />
      {/* submit button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
