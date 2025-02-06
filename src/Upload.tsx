import { useMutation } from 'react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import './App.css'

const Upload = () => {
    const navigate = useNavigate();

    const [notebookName, setNotebookName] = useState('');
    const [notebookDescription, setNotebookDescription] = useState('');

    const mutation = useMutation(postUploadNotebook, {
        onSuccess: (data) => {
            // Handle success
            console.log(data);
        },
        onError: (error) => {
            // Handle error
            console.log(error);
        },
    });

    const handleClick = () => {
        const randomId = Math.floor(Math.random() * 1000); // Generate random ID between 0-999
        navigate(`/notebook/${randomId}`);
    };

    return (
        <div className="upload-container">
            <h1>Upload Notebook</h1>
            <form className="upload-form">
                <button className="upload-button">Select Notebook</button>
                <input
                    type="text"
                    value={notebookName}
                    onChange={(e) => setNotebookName(e.target.value)}
                    placeholder="Notebook Name"
                    className="upload-input"
                />
                <input
                    type="text"
                    value={notebookDescription}
                    onChange={(e) => setNotebookDescription(e.target.value)}
                    placeholder="Description"
                    className="upload-input"
                />
                {/* TODO: allow for arbitrary metadata to be added */}
                <button
                    type="submit"
                    onClick={handleClick}
                    className="upload-submit-button"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

async function postUploadNotebook(data: any) {
    const response = await axios.post('/api/endpoint', data);
    return response.data;
}

export default Upload;
