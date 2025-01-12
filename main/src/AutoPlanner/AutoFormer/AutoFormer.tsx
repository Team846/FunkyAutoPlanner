import { Dispatch, SetStateAction } from "react";
import PageChooser from "../../PageChooser/PageChooser";

function AutoFormer({onPath, setOnPath, createAuto, name, setName, saveAuto}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>, createAuto:Function, name:string, setName:Dispatch<SetStateAction<string>>, saveAuto:Function}) {
    return (
      <div className="AutoFormer">
        <header className="Auto-former-header">
          <div className="header">
            <div className="create-path" onClick={()=>{createAuto()}}> Create Auto</div>
            <PageChooser onPath={onPath} setOnPath={setOnPath} />
            <div className="save-path" onClick={()=>{saveAuto()}}>Save Auto</div>
            <input value={name} onChange={evt => setName(evt.target.value)}/>
          </div>
        </header>
      </div>
    );
  }
  
  export default AutoFormer;
  