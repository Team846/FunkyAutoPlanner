import { Dispatch, SetStateAction } from "react";
import PageChooser from "../../PageChooser/PageChooser";
import "./AutoFormer.css"

function AutoFormer({onPath, setOnPath}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>}) {
    return (
      <div className="AutoFormer">
        <header className="Auto-former-header">
          <div className="header">
            <div className="create-path" onClick={()=>{}}> Create Auto</div>
            <PageChooser onPath={onPath} setOnPath={setOnPath} />
            <div className="save-path" onClick={()=>{}}>Save Auto</div>
          </div>
        </header>
        <div className="creator-box">
          <p>Creator</p>
          <div className-="auto-box">
            <span className="box-desc">Drag an auto to get started</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default AutoFormer;
  