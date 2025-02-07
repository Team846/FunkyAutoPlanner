import { Dispatch, SetStateAction } from "react";
import Action from "../ActionList/Action/Action";
import "./ActionList.css"
import { PointToBeMade } from "../../PathPlanner/PathField/Field";

function ActionList({actionlist, auto, setAuto, setNamedAuto} : {actionlist: string[], auto:((string | number)[] | PointToBeMade[])[], setAuto: Dispatch<SetStateAction<((string | number)[] | PointToBeMade[])[]>>, setNamedAuto: Dispatch<SetStateAction<string[]>>}) {

    return (
      <div className="ActionList">
        <header className="Action-list-header">ActionList
            {actionlist.map((value, index) => {
                if (value != "") {
                  return(<Action action={value} auto={auto} setAuto={setAuto} setNamedAuto={setNamedAuto}/>)
                }
            })
            }
        </header>
        <div>
         
        </div>
      </div>
    );
  }
  
  export default ActionList;
  