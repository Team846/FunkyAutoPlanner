import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import Path from "./Path/Path /";
import "./AutoList.css"
import { parseAutoFile, parsePathFile } from "../../parser";

function AutoList({setAuto, setNamedAuto, autoSavePath, refresh, setName}) {

    const [AutoList, SetAutoList] = useState([]);

    useEffect( () => {
      window.api.send("allFilesInDir2", `../build/visualizer/scripts/`, "");
      window.api.receive("allFilesInDirData2", (data) => {
          SetAutoList(data);
      });
    }, [refresh]);

    const loadAuto=(name)=>{
      setName(name);
      window.api.send("readFromAppFile", `../build/visualizer/scripts/${name}`, "");
      window.api.receive("fileData", async (data) => {

        parseAutoFile(data).then((res) => {
          
        setAuto(res[1]);

        setNamedAuto(res[0]);

        });
      });
    }

    const removeAuto = (name) => {
      window.api.send("removeFileFromApp", `../build/visualizer/scripts/${name}`);
      window.api.send("removeFile", `${autoSavePath}/autos/scripts/${name}`);
      SetAutoList((prevList) => prevList.filter((file) => file !== name));
      };

    return (
      <div className="AutoList">
        <header className="Path-list-header">AutoList
            {AutoList.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="AutoComponent"
                    onClick={() => { loadAuto(value); }}
                    onContextMenu={(e) => {
                      e.preventDefault(); 
                      removeAuto(value);
                    }}
                  >
                    {value}
                  </div>
                );
              })
            }
        </header>
      </div>
    );
  }
  
  export default AutoList;
  