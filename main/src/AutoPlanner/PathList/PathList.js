import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import Path from "./Path/Path /";
import "./PathList.css"
import { parsePathFile } from "../../parser";

function PathList({setAuto, setNamedAuto}) {

    const [Pathlist, SetPathlist] = useState([]);

    useEffect(() => {
      window.api.send("allFilesInDir", `/visualizer/paths/`, "");
      window.api.receive("allFilesInDirData", (data) => {
          SetPathlist(data);
      });
    }, []);

    const addPath=(name)=>{
      window.api.send("readFromAppFile", `/visualizer/paths/${name}`, "");
      window.api.receive("fileData", (data) => {
        //console.log(name);
        setAuto((prevAuto) => [
          ...prevAuto, 
          parsePathFile(data)
        ]);
        
        setNamedAuto((prevNamedAuto) => [
          ...prevNamedAuto,
          name
        ]);
      });
    }

    return (
      <div className="PathList">
        <header className="Path-list-header">PathList
            {Pathlist.map((value, index) => {
                return(<div className="PathComponent" onClick={()=>{addPath(value)}}>{value}</div>)
            })
            }
        </header>
      </div>
    );
  }
  
  export default PathList;
  