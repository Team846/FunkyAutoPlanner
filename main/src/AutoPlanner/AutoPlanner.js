import { PointToBeMade } from "../PathPlanner/PathField/Field";
import ActionList from "./ActionList/ActionList";
import Field from "./AutoField/Field";
import AutoFormer from "./AutoFormer/AutoFormer"
import AutoList from "./AutoList/AutoList";
import PathList from "./PathList/PathList";
import { Dispatch, SetStateAction, useState } from "react";
import SaveToPath from "./SaveToPath/SaveToPath";

function AutoPlanner({onPath, setOnPath}) {

  const [auto, setAuto] = useState([]);
  const [namedAuto, setNamedAuto] = useState([]);
  const [name, setName] = useState("");
  const [autoSavePath, setAutoSavePath] = useState("");
  const [refreshAutos, setRefreshAutos] = useState(false);

  const createAuto =()=>{
    setNamedAuto([]);
    setAuto([])
    setName("");
  }

  const saveAuto =()=>{
    window.api.send("readFromAppFile", `SavePath.txt`);
    window.api.receive("fileData", (data) => {
      setAutoSavePath(data);
    });
    if (namedAuto.length<1){
      console.error("Need at least one point for an auto!");
      return;
    }
    else if (typeof auto.at(0)?.at(0)=="string"){
      console.error("Must start with a point, not an action!");
      return;
    }

    var msg="0,2\n"
    msg+=`F,${namedAuto.at(0)}\n`
    for (var i=1; i<auto.length; i++){
      if (typeof auto.at(i)?.at(0)=="string"){
        msg+=`ACT,${namedAuto.at(i)}\n`
      }
      else{
        msg+=`PATH,${namedAuto.at(i)}\n`
      }
    }
    msg=msg.substring(0, msg.length-1);
    window.api.send("writeToFile", `${autoSavePath}/scripts/${name}`, msg);
    window.api.send("writeToAppFile", `visualizer/scripts/${name}`, msg);
    createAuto();
    window.api.send("scpFile", `/deploy/scripts/${name}`, `/scripts/${name}`);
    setRefreshAutos((prev) => !prev);
  }
  return (
    <div className="AutoPlanner">
        <Field Auto={auto}/>
        <SaveToPath text={autoSavePath} setText={setAutoSavePath}/>
        <AutoFormer onPath={onPath} setOnPath={setOnPath} createAuto={createAuto} name={name} setName={setName} saveAuto={saveAuto} namedAutoList={namedAuto} setNamedAutoList={setNamedAuto} autoList={auto} setAutoList={setAuto}/>
        <PathList setAuto={setAuto} setNamedAuto={setNamedAuto} pathSavePath={autoSavePath}/>
        <ActionList actionlist={["shoot", "prep_shoot", "a_prep_shoot", "deploy_intake", "auto_home"]} auto={auto} setAuto={setAuto} setNamedAuto={setNamedAuto}/>
        <AutoList setAuto={setAuto} setNamedAuto={setNamedAuto} autoSavePath={autoSavePath} refresh={refreshAutos}/>
    </div>
  );
}

export default AutoPlanner;
