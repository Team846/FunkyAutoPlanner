import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import Path from "./Path/Path /";
import "./AutoList.css"
import { parseAutoFile, parsePathFile } from "../../parser";

function AutoList({setAuto, setNamedAuto, autoSavePath, refresh}) {

    const [AutoList, SetAutoList] = useState([]);


    const sleep = ms => new Promise(r => setTimeout(r, ms));

    useEffect( () => {
      window.api.send("allFilesInDir2", `/visualizer/scripts/`, "");
      window.api.receive("allFilesInDirData2", (data) => {
          SetAutoList(data);
      });
    }, [refresh]);

    const loadAuto=(name)=>{
      window.api.send("readFromAppFile", `visualizer/scripts/${name}`, "");
      window.api.receive("fileData", async (data) => {

        parseAutoFile(data).then((res) => {
          
        setAuto(res[1]);

        setNamedAuto(res[0]);
        });
      });
    }

    const removeAuto = (name) => {
      window.api.send("removeFileFromApp", `/visualizer/scripts/${name}`);
      window.api.send("removeFile", `${autoSavePath}/scripts/${name}`);
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
  