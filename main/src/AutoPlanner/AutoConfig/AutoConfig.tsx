import { Dispatch, SetStateAction } from "react";
import PageChooser from "../../PageChooser/PageChooser";
import PathList from "../PathList/PathList";
import ActionList from "../ActionList/ActionList";

interface IAutoConfig {
    onPath: boolean;
    setOnPath:Dispatch<SetStateAction<boolean>>;
    actionList: any[];
}

function AutoConfig({onPath, setOnPath, actionList}: IAutoConfig) {
    return (
      <div style={{ display: 'flex', flexDirection: 'row'}} className="PathChooser">
        <div style={{width: "20vw"}}>
          {/* <PathList /> */}
        </div>
        <div style={{ width: "40%", display: 'flex', flexDirection: 'column'}}>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <button>Create Auto</button>
            <PageChooser onPath={onPath} setOnPath={setOnPath}/>
            <button>Save Auto</button>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default AutoConfig;
  