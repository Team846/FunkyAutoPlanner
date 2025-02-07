import { Dispatch, SetStateAction, useState } from "react";
import "./ActionAdder.css"

function ActionAdder({actionList, setActionList, setRefreshActions}) {

    const [action, setAction] = useState("");

    function addAction() {
      setActionList(prevList => [...prevList, action]);
      var newData = "";
      const msg = action + '\n';
      window.api.send("readFromAppFile", `../build/visualizer/ActionList.lst`);
      window.api.receive("fileData", async (data) => {
        newData = data + msg;
        console.log("newData", newData);
        window.api.send("writeToAppFile", `../build/visualizer/ActionList.lst`, newData);
        setTimeout(() => {
          setRefreshActions(true);
          setAction("");
        }, 10);   
      }); 
    };

    return (
      <div className="ActionAdder">
        <div className="contain">
          <div className="container">
            <input className="input" type="string" value={action} onChange={evt => setAction(evt.target.value)}/>
          </div>
          <div className="adder" onClick={addAction}></div>
        </div>
      </div>
    );
  }
  
  export default ActionAdder;
  