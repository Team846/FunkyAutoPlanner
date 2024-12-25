import { Dispatch, SetStateAction } from "react";
import Action from "../ActionList/Action/Action";
import "./ActionList.css"

function ActionList({actionlist, auto, setAuto} : {actionlist: string[], auto:((string | number)[] | number[][])[], setAuto: Dispatch<SetStateAction<((string | number)[] | number[][])[]>>}) {

    return (
      <div className="ActionList">
        <header className="Action-list-header">ActionList
            {actionlist.map((value, index) => {
                return(<Action action={value} auto={auto} setAuto={setAuto}/>)
            })
            }
        </header>
      </div>
    );
  }
  
  export default ActionList;
  