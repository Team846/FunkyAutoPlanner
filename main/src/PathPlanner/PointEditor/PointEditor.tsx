import { Dispatch, SetStateAction, useState } from "react";
import ModifiedInputField from "./ModifiedInputField";
import "./PointEditor.css"
import { PointToBeMade } from "../PathField/Field";
import { fieldToPercX, fieldToPercY, percToFieldX, percToFieldY} from "../../util";

function PointEditor({pointOfInterest, path, setPath, x, setX, y, setY, v, setV, r, setR}: {pointOfInterest:number|undefined,
                                                                                            path:PointToBeMade[], setPath:Dispatch<SetStateAction<PointToBeMade[]>>,
                                                                                            x:number, setX:Dispatch<SetStateAction<number>>, 
                                                                                            y:number, setY:Dispatch<SetStateAction<number>>, 
                                                                                            v:number, setV:Dispatch<SetStateAction<number>>, 
                                                                                            r:number, setR:Dispatch<SetStateAction<number>>}) {


  const savePoint =() =>{
    if (pointOfInterest!=undefined){
      let tempPath=[...path]
      tempPath[pointOfInterest].CordX=fieldToPercX(10*x/10);
      tempPath[pointOfInterest].CordY=fieldToPercY(10*y/10);
      tempPath[pointOfInterest].velocity=v;
      tempPath[pointOfInterest].bearing=r;
      setPath(tempPath);
    }
  }
  const removePoint =() =>{
    if (pointOfInterest!=undefined){
      let tempPath=[...path]
      tempPath.splice(pointOfInterest, 1)
      setPath(tempPath);
    }
    pointOfInterest=undefined;
  }


    return (
      <div className="PointEditor">
        <header className="Point-Editor-header">PointEditor</header>
        <div className="main-contain">
          <div className="item">
            <div className="pos-label">Position X</div>
            <div className="sub-item">
              <ModifiedInputField field={x} setField={setX} unit="in" />
              <span>Default: 0</span>
            </div>
          </div>
          <div className="item">
            <div className="pos-label">Position Y</div>
            <div className="sub-item">
              <ModifiedInputField field={y} setField={setY} unit="in" />
              <span>Default: 0</span>
            </div>
          </div>
          <div className="item">
            <div className="pos-label">Velocity</div>
            <div className="sub-item">
              <ModifiedInputField field={v} setField={setV} unit="ft/s" />
              <span>Default: 0</span>
            </div>
          </div>
          <div className="item">
            <span className="pos-label">Rotation</span>
            <div className="sub-item">
              <ModifiedInputField field={r} setField={setR} unit="deg" />
              <span>Default: 0</span>
            </div>
          </div>
          <div onClick={savePoint}>Change Point</div>
          <div onClick={removePoint}>Remove Point</div>
        </div>
      </div>
    );
  }
  
  export default PointEditor;
  