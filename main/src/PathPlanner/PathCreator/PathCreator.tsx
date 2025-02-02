import { useState, SetStateAction, Dispatch } from "react";
import "./PathCreator.css"
import PageChooser from "../../PageChooser/PageChooser";

function PathCreator({save, create, path, setPath, name, setName, additionalText, setAdditionalText} : {save : Function, create: Function, path: boolean, setPath: Dispatch<SetStateAction<boolean>>, name:string, setName:Dispatch<SetStateAction<string>>, additionalText:string, setAdditionalText: Dispatch<SetStateAction<string>>}) {

    return (
      <div className="path-creator">
        <div className="header">
          <div className="create-path" onClick={()=>{create(); setName(""); setAdditionalText("");}}> Create Path</div>
          <PageChooser onPath={path} setOnPath={setPath} />
          <div className="save-path" onClick={()=>{save();}}>Save Path</div>
        </div>
        <input className="path-name" placeholder="Path name here" value={name} onChange={evt => setName(evt.target.value)}/>
        <input className="additional-text" placeholder="Additional input here" value={additionalText} onChange={evt => setAdditionalText(evt.target.value)} />
      </div>
    );
}
  
export default PathCreator;
