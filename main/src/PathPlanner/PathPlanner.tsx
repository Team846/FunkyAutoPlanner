import { Dispatch, SetStateAction, useState } from "react";
import Field, { PointToBeMade } from "./PathField/Field";
import PointAdder from "./PointAdder/PointAdder";
import PointEditor from "./PointEditor/PointEditor";
import PathCreator from "./PathCreator/PathCreator";
import { scpFile } from "../robotInteraction";
import PageChooser from "../PageChooser/PageChooser";
import PathList from "../AutoPlanner/PathList/PathList";
import "./PathPlanner.css"


function PathPlanner({path, setPath}: {path: boolean, setPath: Dispatch<SetStateAction<boolean>>}) {

  const [curPath, setCurPath] = useState<PointToBeMade[]>([]);
  const [pointOfInterest, setPointOfInterest] = useState<PointToBeMade>();
  const [name, setName] = useState("");

  const create = () =>{
    setCurPath([]);
  };

  const savePath = (name : string) => {
    setName(name)
    if (name ==""){
      console.error("Path must have a name!");
      return;
    }
    if (curPath.length<2){
      console.error("Path must have at least a point!");
      return;
    }

  };

  const onPointClick =(i:number) =>{
    setPointOfInterest(curPath[i]);
  }
  return (
    <div className="PathPlanner">
      <header className="Path-header">
        <Field onPointClick={onPointClick}listOfPoints={curPath} setListOfPoints={setCurPath}/>
        <div className="path-box">
        <PointEditor pointOfInterest={pointOfInterest}/>
          <div style={{ display: 'flex', flexDirection: "column"}}>
            <PathCreator setPath={setPath} path={path} create={create} save={savePath}/>
            <PointAdder path={curPath} setPath={setCurPath}/>
          </div>
        <div className="place-path">
          <header>All Paths</header>
          <div className="path-list-item">ITEM</div>
          <div className="path-list-item">ITEM</div>
        </div>
        </div>
        {/* <PathList  /> */}
      </header>
    </div>
  );
}

export default PathPlanner;
