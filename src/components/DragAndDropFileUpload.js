import React, { useState, useEffect } from "react";

const DragAndDropFileUpload = () => {
    const [files, setFiles] = useState([]);
    const [uploadSpeed, setUploadSpeed] = useState(100); // Bytes per millisecond for simulation

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const uploadedFiles = Array.from(e.dataTransfer.files).map((file) => ({
            file,
            progress: 0,
            status: "pending", // pending, uploading, paused, or completed
            remainingTime: null, // In seconds
        }));
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    const handleFileChange = (e) => {
        const uploadedFiles = Array.from(e.target.files).map((file) => ({
            file,
            progress: 0,
            status: "pending",
            remainingTime: null, // In seconds
        }));
        setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    };

    const startUpload = (index) => {
        const updatedFiles = [...files];
        const file = updatedFiles[index];
        file.status = "uploading";

        const totalSize = file.file.size; // Total size in bytes
        const startTime = Date.now();

        const interval = setInterval(() => {
            setFiles((prevFiles) => {
                const updatedFiles = [...prevFiles];
                const currentFile = updatedFiles[index];

                if (currentFile.status === "paused" || currentFile.status === "canceled") {
                    clearInterval(interval);
                    return updatedFiles;
                }

                const elapsedTime = Date.now() - startTime;
                const uploadedBytes = Math.min(elapsedTime * uploadSpeed, totalSize);

                currentFile.progress = Math.round((uploadedBytes / totalSize) * 100);
                currentFile.remainingTime = Math.max(
                    Math.ceil((totalSize - uploadedBytes) / uploadSpeed / 1000), // Remaining time in seconds
                    0
                );

                if (uploadedBytes >= totalSize) {
                    currentFile.progress = 100;
                    currentFile.status = "completed";
                    currentFile.remainingTime = null;
                    clearInterval(interval);
                }

                return updatedFiles;
            });
        }, 100);
    };

    const pauseUpload = (index) => {
        const updatedFiles = [...files];
        updatedFiles[index].status = "paused";
        setFiles(updatedFiles);
    };

    const cancelUpload = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
    };

    const downloadFile = (index) => {
        const file = files[index];
        const url = URL.createObjectURL(file.file);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.file.name;
        link.click();
        URL.revokeObjectURL(url);

        // Mark file as "canceled" after download is complete
        const updatedFiles = [...files];
        updatedFiles[index].status = "canceled";
        setFiles(updatedFiles);
    };

    const downloadAllFiles = () => {
        files.forEach((fileObj, index) => {
            if (fileObj.status === "completed") {
                downloadFile(index);
            }
        });
    };

    return (
        <div className="file-upload-container">
            <div
                className="drop-zone"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <img className="file-upload-container-image" src="/images/upload.svg" alt="file-upload-container-image" />
                <p>Drag & Drop files here</p>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="file-input"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="btn">
                    Choose Files
                </label>
            </div>
            {files.length > 0 && (
                <div className="file-list">
                    <ul className="prog-list">
                        {files.map((fileObj, index) => (
                            <li key={index}>
                                <div className="file-item">
                                    <div  className={"progress-bar " + (fileObj.progress === 100 && 'complete')}  style={{
                                        width: `${fileObj.progress}%`,
                                        backgroundColor: fileObj.progress === 100 ? "green" : "#D0E2FF",
                                    }}>
                                    </div> 
                                <div className="caption-area">
                                    <h6>{fileObj.file.name}</h6>
                                    <div>
                                        
                                    {fileObj.progress === 100 ? (
                                        <p style={{ marginLeft: "10px" }}>Downloaded</p>
                                    ) : (
                                        <p>
                                            {fileObj.progress}% |{" "}
                                            {fileObj.remainingTime
                                                ? `${fileObj.remainingTime}s remaining `
                                                : ""}
                                        </p>
                                    )}
                                    <p> ({(fileObj.file.size / 1024).toFixed(2)} KB)</p>
                                    </div>
                                </div>
                                <div className="action-buttons">
                                    {fileObj.status === "pending" && (
                                        <button className="btn-img" onClick={() => startUpload(index)}>
                                            <img src="/images/play.png" alt=""/>
                                        </button>
                                    )}
                                    {fileObj.status === "uploading" && (
                                        <button className="btn-img" onClick={() => pauseUpload(index)}>
                                            <img src="/images/stop.png" alt=""/>
                                        </button>
                                    )}
                                    {fileObj.status === "paused" && (
                                        <button className="btn-img" onClick={() => startUpload(index)}>
                                            <img src="/images/play.png" alt=""/>
                                        </button>
                                    )}
                                    {fileObj.status === "completed" && (
                                        <button className="btn-img" onClick={() => downloadFile(index)}>
                                            <img src="/images/download.png" alt=""/>
                                        </button>
                                        
                                    )}
                                     { fileObj.status !== "canceled" && (
                                        <button className="btn-img" onClick={() => cancelUpload(index)}>
                                            <img src="/images/cancel.png" alt=""/>
                                        </button>
                                    )}
                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="btn-row">
                        <button className="btn" type="button" onClick={downloadAllFiles}>
                            Download All
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DragAndDropFileUpload;
