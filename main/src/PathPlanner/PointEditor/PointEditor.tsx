import { useState } from "react";
import ModifiedInputField from "./ModifiedInputField";

function PointEditor() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [v, setV] = useState(0);
  const [r, setR] = useState(0);

    return (
      <div className="PointEditor">
        <header className="Point-Editor-header">PointEditor</header>
        <div>
          <div>
            <span>Position X</span>
            <div>
              <ModifiedInputField field={x} setField={setX} unit="m" />
              <span>Default: N/A</span>
            </div>
          </div>
          <div>
            <span>Position Y</span>
            <div>
              <ModifiedInputField field={y} setField={setY} unit="m" />
              <span>Default: N/A</span>
            </div>
          </div>
          <div>
            <span>Velocity</span>
            <div>
              <ModifiedInputField field={v} setField={setV} unit="m/s" />
              <span>Default: 10 m/s</span>
            </div>
          </div>
          <div>
            <span>Rotation</span>
            <div>
              <ModifiedInputField field={r} setField={setR} unit="deg" />
              <span>Default: 50 deg</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default PointEditor;
  