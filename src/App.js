import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [fileText, setFileText] = useState([]);
  const showFile = async (e) => {
    e.preventDefault();
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result.split("\n");
        setFileText(text);
      };
      reader.readAsText(e.target.files[0]);
    }
  };
  return (
    <div className="app">
      <input type="file" onChange={(e) => showFile(e)} />
      {fileText.map((line) => {
        return (
          <p
            style={{
              fontWeight: "bolder",
              color: "red"
            }}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
};

export default App;
