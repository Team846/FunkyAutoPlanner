import { Dispatch, SetStateAction, useState } from "react";
import Field from "./PathField/Field";
import PointAdder from "./PointAdder/PointAdder";
import PointEditor from "./PointEditor/PointEditor";
import PathCreator from "./PathCreator/PathCreator";
import { scpFile } from "../robotInteraction";
import PageChooser from "../PageChooser/PageChooser";
import PathList from "./PathList/PathList";
import "./PathPlanner.css";
import { fieldToPercX, fieldToPercY, percToFieldX, percToFieldY } from "../util";
import SaveToPath from "../AutoPlanner/SaveToPath/SaveToPath";

function PathPlanner({ path, setPath }) {
  const [curPath, setCurPath] = useState([]);
  const [pointOfInterest, setPointOfInterest] = useState();
  const [name, setName] = useState("");
  const [pathSavePath, setPathSavePath] = useState("");
  const [additionalText, setAdditionalText] = useState("");
  const [refreshPaths, setRefreshPaths] = useState(false);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [v, setV] = useState(0);
  const [r, setR] = useState(0);

  const create = () => {
    setName("");
    setAdditionalText("");  
  };

  async function savePath() {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
   window.api.send("readFromAppFile", `SavePath.txt`);
    window.api.receive("fileData", (data) => {
      setPathSavePath(data);
    });
    await sleep(1);
    if (name === "") {
      console.error("Path must have a name!");
      return;
    }
    if (curPath.length < 1) {
      console.error("Path must have at least a point!");
      return;
    }

    let msg = "";

    for (let i = 0; i < curPath.length; i++) {
      msg += `P,${percToFieldX(curPath[i].CordX)},${percToFieldY(curPath[i].CordY)},${curPath[i].bearing},${curPath[i].velocity}\n`;
    }
    
    if (curPath.length === 1) {
      //This is a point not a path, save in points.lst
      const addendMsg = `N,${name},${percToFieldX(curPath[0].CordX)},${percToFieldY(curPath[0].CordY)},${curPath[0].bearing},${curPath[0].velocity}`;
      window.api.send("readFromAppFile", "/visualizer/points.lst", "");
      window.api.receive("fileData", (data) => {
        let updatedData = "";
        if (data !== "") {
          const lines = data.split("\n");
          const filteredLines = lines.filter((line) => {
            const parts = line.split(",");
            return parts[1] !== name;
          });
          filteredLines.push(addendMsg);
          updatedData = filteredLines.join("\n");
        } else {
          updatedData = addendMsg;
        }
        window.api.send("writeToAppFile", "/visualizer/points.lst", updatedData);
        window.api.send("writeToFile", `${pathSavePath}/points.lst`, updatedData);
        window.api.send("scpFile", "/deploy/points.lst", "/points.lst");
    });
    } else {
      msg = `P,${percToFieldX(curPath[0].CordX)},${percToFieldY(curPath[0].CordY)},${curPath[0].bearing},${curPath[0].velocity},${additionalText}\n` + msg;
      window.api.send("writeToFile", `${pathSavePath}/paths/${name}`, msg.substring(0, msg.length - 1));
      window.api.send("scpFile", `/deploy/paths/${name}`, `/paths/${name}`);
    }
    window.api.send("writeToAppFile", `/visualizer/paths/${name}`, msg.substring(0, msg.length - 1));
    setRefreshPaths((prev) => !prev);
  };

  const onPointClick = (i) => {
    setPointOfInterest(i);
    setX(percToFieldX(curPath[i].CordX));
    setY(percToFieldY(curPath[i].CordY));
    setV(curPath[i].velocity);
    setR(curPath[i].bearing);
  }

  return (
    <div className="PathPlanner">
      <header className="Path-header">
        <Field onPointClick={onPointClick} listOfPoints={curPath} setListOfPoints={setCurPath} />
        <div className="path-box">
          <PointEditor pointOfInterest={pointOfInterest} path={curPath} setPath={setCurPath} x={x} setX={setX} y={y} setY={setY} v={v} setV={setV} r={r} setR={setR}/>
          <div style={{ display: 'flex', flexDirection: "column" }}>
            <PathCreator setPath={setPath} path={path} create={create} save={savePath} name={name} setName={setName} additionalText={additionalText} setAdditionalText={setAdditionalText}/>
            <PointAdder path={curPath} setPath={setCurPath}/>
          </div>
        <SaveToPath text={pathSavePath} setText={setPathSavePath}/>
        <PathList setPath={setCurPath} setName={setName} refresh={refreshPaths} pathSavePath={pathSavePath}/>
        </div>
      </header>
    </div>
  );
}

export default PathPlanner;
