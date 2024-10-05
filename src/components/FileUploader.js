// FileUploader.js
import React, { useState } from 'react';
import { uploadToPinata } from '../services/pinataService';
import '../styles/FileUploader.css';

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setStatus('Please select a file');
            return;
        }
        setStatus('Uploading...');
        const response = await uploadToPinata(file, (event) => {
            const percent = Math.round((100 * event.loaded) / event.total);
            setProgress(percent);
        });
        if (response) {
            setStatus('Upload successful!');
            setProgress(100);
        } else {
            setStatus('Upload failed.');
        }
    };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <div className="status">{status}</div>
            {progress > 0 && <div className="progress-bar" style={{ width: `${progress}%` }}></div>}
        </div>
    );
};

export default FileUploader;
