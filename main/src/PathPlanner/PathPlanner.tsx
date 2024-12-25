import { Dispatch, SetStateAction, useState } from "react";
import Field, { PointToBeMade } from "./PathField/Field";
import PointAdder from "./PointAdder/PointAdder";
import PointEditor from "./PointEditor/PointEditor";
import PathCreator from "./PathCreator/PathCreator";
import { scpFile } from "../robotInteraction";
import PageChooser from "../PageChooser/PageChooser";
import PathList from "../AutoPlanner/PathList/PathList";
import "./PathPlanner.css"
import { fieldToPercX, fieldToPercY, percToFieldX, percToFieldY} from "../util";


function PathPlanner({path, setPath}: {path: boolean, setPath: Dispatch<SetStateAction<boolean>>}) {

  const [curPath, setCurPath] = useState<PointToBeMade[]>([]);
  const [pointOfInterest, setPointOfInterest] = useState<number>();
  const [name, setName] = useState("");

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [v, setV] = useState(0);
  const [r, setR] = useState(0);

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
    setPointOfInterest(i);
    setX(percToFieldX(curPath[i].CordX));
    setY(percToFieldY(curPath[i].CordY));
    setV(curPath[i].velocity);
    setR(curPath[i].bearing)
  }
  return (
    <div className="PathPlanner">
      <header className="Path-header">
        <Field onPointClick={onPointClick}listOfPoints={curPath} setListOfPoints={setCurPath}/>
        <div className="path-box">
        <PointEditor pointOfInterest={pointOfInterest} path={curPath} setPath={setCurPath} x={x} setX={setX} y={y} setY={setY} v={v} setV={setV} r={r} setR={setR}/>
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
