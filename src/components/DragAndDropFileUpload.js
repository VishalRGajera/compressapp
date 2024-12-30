import React, { useState } from "react";

const DragAndDropFileUpload = () => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const uploadedFiles = Array.from(e.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    const handleFileChange = (e) => {
        const uploadedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    return (
        <div className="file-upload-container">
            <div
                className={`drop-zone ${isDragging ? "dragging" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <img className="file-upload-container-image" src="/upload.png" alt="file-upload-container-image" />
                <p>Drag & Drop files here</p>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="file-input"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="browse-button">
                    Choose Files
                </label>
            </div>
            {files && files.length > 0 && (
                <div className="file-list">
                    <ul>
                        {files.map((file, index,) => (
                            <li key={index}>
                                {file.name} ({(file.size / 1024).toFixed(2)} KB)
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DragAndDropFileUpload;
