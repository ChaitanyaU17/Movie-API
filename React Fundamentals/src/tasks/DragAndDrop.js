import React, { useState } from "react";
import axios from "axios";

const DragAndDrop = () => {
  const [file, setFile] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [message, setMessage] = useState("");

  // Handle file selection
  const onDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  // Handle file upload
  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });

      setMessage("File uploaded successfully!");
    } catch (err) {
      setMessage("Error uploading file.");
    }
  };

  // Handle drag over event
  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="file-upload" style={{color: 'white'}}>
      <h2>Drag and Drop File Upload</h2>
      <div
        className="drop-zone"
        onDrop={onDrop}
        onDragOver={onDragOver}
        style={{
          border: "2px dashed #007bff",
          padding: "20px",
          width: "400px",
          textAlign: "center",
        }}
      >
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p>Drag and drop a file here, or click to select a file.</p>
        )}
      </div>
      {file && (
        <>
          <button onClick={uploadFile} style={{ marginTop: "10px" }}>
            Upload
          </button>
          <div style={{ width: "400px", marginTop: "10px" }}>
            <div
              style={{
                height: "25px",
                backgroundColor: "#e0e0e0",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${uploadPercentage}%`,
                  backgroundColor: "#007bff",
                  textAlign: "center",
                  color: "white",
                  lineHeight: "25px",
                  transition: "width 0.4s",
                }}
              >
                {uploadPercentage}%
              </div>
            </div>
          </div>
        </>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default DragAndDrop;
