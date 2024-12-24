import { useState } from "react";
import ModifiedInputField from "./ModifiedInputField";
import "./PointEditor.css"

function PointEditor() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [v, setV] = useState(0);
  const [r, setR] = useState(0);

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
        </div>
      </div>
    );
  }
  
  export default PointEditor;
  