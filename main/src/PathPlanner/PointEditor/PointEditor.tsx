import { useState } from "react";
import ModifiedInputField from "./ModifiedInputField";
import "./PointEditor.css"
import { PointToBeMade } from "../PathField/Field";

function PointEditor({pointOfInterest}: {pointOfInterest:PointToBeMade|undefined}) {

  const [x, setX] = useState(pointOfInterest==undefined?0:pointOfInterest.CordX);
  const [y, setY] = useState(pointOfInterest==undefined?0:pointOfInterest.CordY);
  const [v, setV] = useState(pointOfInterest==undefined?0:pointOfInterest.velocity);
  const [r, setR] = useState(pointOfInterest==undefined?0:pointOfInterest.bearing);

  const savePoint =() =>{
    pointOfInterest?.CordX
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
  