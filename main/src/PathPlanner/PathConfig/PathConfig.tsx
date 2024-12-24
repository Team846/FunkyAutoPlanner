import { Dispatch, SetStateAction, useState } from "react";
import PageChooser from "../../PageChooser/PageChooser";
import PointEditor from "../PointEditor/PointEditor";
import PathList from "../../AutoPlanner/PathList/PathList";
import ModifiedInputField from "../PointEditor/ModifiedInputField";

function PathConfig({onPath, setOnPath}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [name, setName] = useState("");
  const [com, setCom] = useState("");
  
  return (
      <div style={{ display: 'flex', flexDirection: 'row'}} className="PathChooser">
        <div style={{width: "20vw"}}>
          <PointEditor />
        </div>
        <div style={{ width: "40%", display: 'flex', flexDirection: 'column'}}>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <button>Create Path</button>
            <PageChooser onPath={onPath} setOnPath={setOnPath}/>
            <button>Save Path</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <ModifiedInputField field={name} setField={setName} unit="" />
            <div style={{ display: 'flex', flexDirection: 'row'}}>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                  <span>X</span>
                  <div>
                    <ModifiedInputField field={x} setField={setX} unit="m" />
                  </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                  <span>Y</span>
                  <div>
                    <ModifiedInputField field={y} setField={setY} unit="m" />
                  </div>
              </div>
              <div>
                <span>(or click a point on the screen)</span>
                <button>
                  +
                </button>
              </div>
            </div>
            <div>
              <input onChange={e => setCom(e.target.value)} value={com} placeholder="Comments" />
            </div>
          </div>
        </div>
        <div style={{ width: '20vw'}}>
          <PathList />
        </div>
      </div>
    );
  }
  
  export default PathConfig;