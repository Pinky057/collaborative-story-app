import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle upload logic here
    setUploading(true);
    console.log("Story title:", title);
    console.log("Story content:", content);
    console.log("File to upload:", file);
    setUploading(false);
  };

  return (
      <div>
        <h2>Contribute to the Story</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                required
            />
          </label>
          <label>
            Content:
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your story"
                required
            />
          </label>
          <label>
            File:
            <input type="file" onChange={handleFileChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {uploading && <p>Uploading...</p>}
      </div>
  );
};

export default Upload;
