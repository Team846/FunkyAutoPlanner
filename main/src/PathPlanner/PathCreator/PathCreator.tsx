import { useState, SetStateAction, Dispatch} from "react";
import "./PathCreator.css"
import PageChooser from "../../PageChooser/PageChooser";

function PathCreator({save, create, path, setPath} : {save : Function, create: Function, path: boolean; setPath: Dispatch<SetStateAction<boolean>>}) {

    const [name, setName] = useState("");

    return (
      <div className="path-creator">
        <div className="header">
          <div className="create-path" onClick={()=>{create(); setName("");}}> Create Path</div>
          <PageChooser onPath={path} setOnPath={setPath} />
          <div className="save-path" onClick={()=>{save(name);}}>Save Path</div>
        </div>
        <input  className="path-name" placeholder="Path name here" value={name} onChange={evt => setName(evt.target.value)}/>
      </div>
    );
  }
  
  export default PathCreator;
  