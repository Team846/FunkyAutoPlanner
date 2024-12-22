import { useState } from "react";
import PathChooser from "./PathChooser/PathChooser";
import Field from "./PathField/Field";
import PointAdder from "./PointAdder/PointAdder";
import PointEditor from "./PointEditor/PointEditor";
import PathCreator from "./PathCreator/PathCreator";
import { scpFile } from "../robotInteraction";


function PathPlanner() {

  const [curPath, setCurPath] = useState<(string | number[])[]>([""]);

  const create = () =>{
    setCurPath([""]);
  };

  const savePath = (name : string) => {
    curPath[0] = name;
    if (name==""){
      console.error("Path must have a name!");
      return;
    }
    if (curPath.length<2){
      console.error("Path must have at least a point!");
      return;
    }

  };
  return (
    <div className="PathPlanner">
      <header className="Path-header">
        <Field/>
        <PathCreator create={create} save={savePath}/>
        <PointAdder setPath={setCurPath}/>
        <PointEditor/>
        <PathChooser/>
      </header>
    </div>
  );
}

export default PathPlanner;
