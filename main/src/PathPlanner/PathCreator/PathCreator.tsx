import { useState } from "react";

function PathCreator({save, create} : {save : Function, create: Function}) {

    const [name, setName] = useState("");

    return (
      <div className="PathCreator">
        <div onClick={()=>{create(); setName("");}}> Create Path</div>
        <div onClick={()=>{save(name);}}>Save Path</div>
        <input value={name} onChange={evt => setName(evt.target.value)}/>
      </div>
    );
  }
  
  export default PathCreator;
  