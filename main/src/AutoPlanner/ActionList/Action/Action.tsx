import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import "./Action.css"

var actions = ""; // Initialize actions as an empty variable initially.

function Action({action, auto, setAuto} : {action:string, auto:((string | number)[] | number[][])[], setAuto: Dispatch<SetStateAction<((string | number)[] | number[][])[]>> }) {

    const handleClick =() =>{
        if (auto.length>0){
            if (actions.length != 0) { // Condition to check that an action has taken place.
                actions += ", " + action; // Concatenate the current action to the existing string of actions if this is true.
            } else {
                actions = action; // If not true, set the actions variable to the current action.
            }
            var k=-1
            while (auto.length+k==-1 || typeof auto[auto.length+k][0]== 'string'){
                k--;
            }
            var x :number = ((auto.at(k) as number[][]).at(-1) as number[])[0];
            var y :number = ((auto.at(k) as number[][]).at(-1) as number[])[1];
            setAuto((prevAuto) => [
                ...prevAuto, 
                [actions, x, y]
            ]);
        }
    }

    return (
      <div className="ActionComponent" key={action} onClick={handleClick}>{action}
      </div>
    );
  }
  
  export default Action;
  