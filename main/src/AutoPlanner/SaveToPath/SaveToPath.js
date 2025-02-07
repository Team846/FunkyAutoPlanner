import {React, useState} from "react";

const SaveToPath = ({ text, setText }) => {
  window.api.send("readFromAppFile", `../build/SavePath.lst`);
    window.api.receive("fileData", (data) => {
      if (data != "") {
        setText(data);
      }
      else {
        setText("");
      }
    });
  const handleChange = (event) => {
    if (event && event.target) {
      setText(event.target.value);
      window.api.send("writeToAppFile", `../build/SavePath.lst`, event.target.value);
      setText(event.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="textbox">Path to Save File: </label>
      <input id="textbox" type="text" value={text || ""} onChange={handleChange} placeholder="Type Path to Save File"/>
    </div>
  );
};

export default SaveToPath;
