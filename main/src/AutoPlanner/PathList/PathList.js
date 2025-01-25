import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./PathList.css";
import { parsePathFile } from "../../parser";

function PathList({ setAuto, setNamedAuto, pathSavePath }) {
  const [Pathlist, SetPathlist] = useState([]);

  useEffect(() => {
    window.api.send("allFilesInDir", "/visualizer/paths/", "");
    window.api.receive("allFilesInDirData", (data) => {
      SetPathlist(data);
    });
  }, []);

  const addPath = (name) => {
    window.api.send("readFromAppFile", `/visualizer/paths/${name}`, "");
    window.api.receive("fileData", (data) => {
      setAuto((prevAuto) => [...prevAuto, parsePathFile(data)]);
      setNamedAuto((prevNamedAuto) => [...prevNamedAuto, name]);
    });
  };

  const removePath = (name) => {
    window.api.send("removeFileFromApp", `/visualizer/paths/${name}`);
    window.api.send("removeFile", `${pathSavePath}/paths/${name}`);
    SetPathlist((prevList) => prevList.filter((file) => file !== name));
    };

  return (
    <div className="PathList">
      <header className="Path-list-header">PathList
        {Pathlist.map((value, index) => {
          return (
            <div
              key={index}
              className="PathComponent"
              onClick={() => { addPath(value); }}
              onContextMenu={(e) => {
                e.preventDefault(); 
                removePath(value);
              }}
            >
              {value}
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default PathList;
