import { Dispatch, SetStateAction } from "react";
import Path from "../PathList/Path/Path";
import "./PathList.css"

function PathList({Pathlist, auto, setAuto} : {Pathlist: (string | number[][])[][], auto:((string | number)[] | number[][])[], setAuto: Dispatch<SetStateAction<((string | number)[] | number[][])[]>>}) {

    return (
      <div className="PathList">
        <header className="Path-list-header">All Paths
            {Pathlist.map((value, index) => {
                return(<Path path={value} auto={auto} setAuto={setAuto}/>)
            })
            }
        </header>
      </div>
    );
  }
  
  export default PathList;
  