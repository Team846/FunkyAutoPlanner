import { Dispatch, SetStateAction } from "react";
import PageChooser from "../../PageChooser/PageChooser";
import PathList from "../PathList/PathList";
import ActionList from "../ActionList/ActionList";

function AutoConfig({onPath, setOnPath}:{onPath:boolean, setOnPath:Dispatch<SetStateAction<boolean>>}) {
    return (
      <div style={{ display: 'flex', flexDirection: 'row'}} className="PathChooser">
        <div style={{width: "20vw"}}>
          <PathList />
        </div>
        <div style={{ width: "40%", display: 'flex', flexDirection: 'column'}}>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <button>Create Auto</button>
            <PageChooser onPath={onPath} setOnPath={setOnPath}/>
            <button>Save Auto</button>
          </div>
        </div>
        <div style={{ width: '20vw'}}>
          <ActionList />
        </div>
      </div>
    );
  }
  
  export default AutoConfig;
  