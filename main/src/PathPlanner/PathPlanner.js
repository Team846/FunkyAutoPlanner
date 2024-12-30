import { Dispatch, SetStateAction, useState } from "react";
import Field, { PointToBeMade } from "./PathField/Field";
import PointAdder from "./PointAdder/PointAdder";
import PointEditor from "./PointEditor/PointEditor";
import PathCreator from "./PathCreator/PathCreator";
import { scpFile } from "../robotInteraction";
import PageChooser from "../PageChooser/PageChooser";
import PathList from "./PathList/PathList";
import "./PathPlanner.css"
import { fieldToPercX, fieldToPercY, percToFieldX, percToFieldY} from "../util";


function PathPlanner({path, setPath}) {

  const [curPath, setCurPath] = useState([]);
  const [pointOfInterest, setPointOfInterest] = useState();
  const [name, setName] = useState("");

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [v, setV] = useState(0);
  const [r, setR] = useState(0);

  const create = () =>{
    setName("");
  };

  const savePath = () => {
    if (name ==""){
      console.error("Path must have a name!");
      return;
    }
    if (curPath.length<1){
      console.error("Path must have at least a point!");
      return;
    }

    var msg="";

    for (var i=1; i<curPath.length; i++){
      msg+=`P,${percToFieldX(curPath.at(i).CordX)},${percToFieldY(curPath.at(i).CordY)},${curPath.at(i).bearing},${curPath.at(i).velocity}\n`
    }
    if (curPath.length==1){
      //this is a point, not a path, save in points.lst
      var addendMsg = `N,${name},${percToFieldX(curPath.at(0).CordX)},${percToFieldY(curPath.at(0).CordY)},${curPath.at(0).bearing},${curPath.at(0).velocity}`
      window.api.send("readFromFile", `/deploy/points.lst`, "");
      window.api.receive("fileData", (data) => {
          if (data!=""){
            window.api.send("writeToFile", `/deploy/points.lst`, data+"\n"+addendMsg);
          }
          else{
            window.api.send("writeToFile", "/deploy/points.lst", addendMsg);
          }
      });
    }
    else{
      window.api.send("writeToFile", `/deploy/paths/${name}`, msg.substring(0, msg.length-1));
    }
    msg=`P,${percToFieldX(curPath.at(0).CordX)},${percToFieldY(curPath.at(0).CordY)},${curPath.at(0).bearing},${curPath.at(0).velocity}\n`+msg


    window.api.send("writeToFile", `/visualizer/paths/${name}`,  msg.substring(0, msg.length-1));


  };

  const onPointClick =(i) =>{
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
            <PathCreator setPath={setPath} path={path} create={create} save={savePath} name={name} setName={setName}/>
            <PointAdder path={curPath} setPath={setCurPath}/>
          </div>

        <PathList setPath={setCurPath} setName={setName}/>
        </div>
      </header>
    </div>
  );
}

export default PathPlanner;
