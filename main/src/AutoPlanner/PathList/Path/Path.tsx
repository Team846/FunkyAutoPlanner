import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import "./Path.css"

function Path({path, auto, setAuto} : {path:(string | number[][])[], auto:((string | number)[] | number[][])[], setAuto: Dispatch<SetStateAction<((string | number)[] | number[][])[]>> }) {

    const handleClick =() =>{
        setAuto((prevAuto) => [
            ...prevAuto, 
            path[1] as number[][],
        ]);
    }

    return (
      <div className="PathComponent" key={path[0] as string} onClick={handleClick}>
        <span>{path[0]}</span>
        <button className="path-button">Intake</button>
        <button className="path-button">Extend</button>
        <button className="path-button">Shoot</button>
      </div>
    );
  }
  
  export default Path;
  