
import "./PathList.css"
import { parsePathFile } from "../../parser";
import {useState, useEffect} from "react"

function PathList({setPath, setName, refresh, pathSavePath}) {

    const [paths, setPaths] = useState([]);

    const loadPath =(name) => {

        window.api.send("readFromAppFile", `../build/visualizer/paths/${name}`, "");
        window.api.receive("fileData", (data) => {
            //console.log(data);
            const newPath = parsePathFile(data);
            setPath(newPath);
            setName(name);
        });
    };


    useEffect(() => {
        window.api.send("allFilesInDir", `../build/visualizer/paths/`, "");
        window.api.receive("allFilesInDirData", (data) => {
            setPaths(data);
            //console.log(data);
            //console.log("ewaoihgawouihg");
        });
      }, [refresh]);

    const removePath = (name) => {
      window.api.send("removeFileFromApp", `../build/visualizer/paths/${name}`);
      window.api.send("removeFile", `${pathSavePath}/autos/paths/${name}`);
      setPaths((prevList) => prevList.filter((file) => file !== name));
      };

    return (
        <div className="place-path">
          <header>All Paths</header>
          {paths.map((i, path) => {
            return (
              <div
                key={path}
                className="PathComponent"
                onClick={() => { loadPath(i); }}
                onContextMenu={(e) => {
                  e.preventDefault(); 
                  removePath(i);
                }}
              >
                {i}
              </div>
            );
          })}
        </div>
    );
  }
  
  export default PathList;
  