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
      tempPath[pointOfInterest].CordX=fieldToPercX(x);
      tempPath[pointOfInterest].CordY=fieldToPercY(y);
      tempPath[pointOfInterest].velocity=v;
      tempPath[pointOfInterest].bearing=r;
      setPath(tempPath);
    }
  }


    return (
      <div className="PointEditor">
        <header className="Point-Editor-header">PointEditor</header>
        <div className="main-contain">
          <div className="item">
            <div className="pos-label">Position X</div>
            <div className="sub-item">
              <ModifiedInputField field={x} setField={setX} unit="m" />
              <span>Default: N/A</span>
            </div>
          </div>
          <div className="item">
            <div className="pos-label">Position Y</div>
            <div className="sub-item">
              <ModifiedInputField field={y} setField={setY} unit="m" />
              <span>Default: N/A</span>
            </div>
          </div>
          <div className="item">
            <div className="pos-label">Velocity</div>
            <div className="sub-item">
              <ModifiedInputField field={v} setField={setV} unit="m/s" />
              <span>Default: 10 m/s</span>
            </div>
          </div>
          <div className="item">
            <span className="pos-label">Rotation</span>
            <div className="sub-item">
              <ModifiedInputField field={r} setField={setR} unit="deg" />
              <span>Default: 50 deg</span>
            </div>
          </div>
          <div onClick={savePoint}>Change Point</div>
        </div>
      </div>
    );
  }
  
  export default PointEditor;
  