import { Dispatch, SetStateAction } from "react";
import PageChooser from "../../PageChooser/PageChooser";

function AutoFormer({onPath, setOnPath}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>}) {
    return (
      <div className="AutoFormer">
        <header className="Auto-former-header">
          <div className="header">
            <div className="create-path" onClick={()=>{}}> Create Path</div>
            <PageChooser onPath={onPath} setOnPath={setOnPath} />
            <div className="save-path" onClick={()=>{}}>Save Auto</div>
          </div>
        </header>
      </div>
    );
  }
  
  export default AutoFormer;
  