import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'll combine the text content and the file upload response from Pinata
    console.log('Story title:', title);
    console.log('Story content:', content);
    // Add logic to send this data to the backend
  };

  return (
      <div className="upload-page">
        <h2>Contribute to the Story</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label>Content:</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
          </div>
          <FileUploader />
          <button type="submit">Submit</button>
        </form>
      </div>
  );
};

export default Upload;
