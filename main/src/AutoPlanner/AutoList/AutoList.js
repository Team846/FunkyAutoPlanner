import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import Path from "./Path/Path /";
import "./AutoList.css"
import { parseAutoFile, parsePathFile } from "../../parser";

function AutoList({setAuto, setNamedAuto}) {

    const [AutoList, SetAutoList] = useState([]);


    const sleep = ms => new Promise(r => setTimeout(r, ms));

    useEffect( () => {
      window.api.send("allFilesInDir2", `/deploy/scripts/`, "");
      window.api.receive("allFilesInDirData2", (data) => {
          SetAutoList(data);
      });
    }, []);

    const loadAuto=(name)=>{
      window.api.send("readFromFile", `/deploy/scripts/${name}`, "");
      window.api.receive("fileData", async (data) => {

        parseAutoFile(data).then((res) => {
          
        setAuto(res[1]);

        setNamedAuto(res[0]);
        });
      });
    }

    return (
      <div className="AutoList">
        <header className="Path-list-header">AutoList
            {AutoList.map((value, index) => {
                return(<div className="AutoComponent" onClick={()=>{loadAuto(value)}}>{value}</div>)
            })
            }
        </header>
      </div>
    );
  }
  
  export default AutoList;
  