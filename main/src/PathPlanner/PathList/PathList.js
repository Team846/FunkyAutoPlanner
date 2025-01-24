
import "./PathList.css"
import { parsePathFile } from "../../parser";
import {useState, useEffect} from "react"

function PathList({setPath, setName, refresh}) {

    const [paths, setPaths] = useState([]);

    const loadPath =(name) => {

        window.api.send("readFromAppFile", `/visualizer/paths/${name}`, "");
        window.api.receive("fileData", (data) => {
            console.log(data);
            const newPath = parsePathFile(data);
            setPath(newPath);
            setName(name);
        });
    };


    useEffect(() => {
        window.api.send("allFilesInDir", `/visualizer/paths/`, "");
        window.api.receive("allFilesInDirData", (data) => {
            setPaths(data);
            console.log(data);
            console.log("ewaoihgawouihg");
        });
      }, [refresh]);

    return (
        <div className="place-path">
          <header>All Paths</header>
          {paths.map((i, path) => {
            return(<div className="path-list-item" onClick={()=>{loadPath(i)}}>{i}</div>);
          })}
        </div>
    );
  }
  
  export default PathList;
  