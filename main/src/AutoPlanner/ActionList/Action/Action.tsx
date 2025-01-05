import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import "./Action.css"

function Action({action, auto, setAuto} : {action:string, auto:((string | number)[] | number[][])[], setAuto: Dispatch<SetStateAction<((string | number)[] | number[][])[]>> }) {

    const handleClick =() =>{
        if (auto.length>0){
            var k=-1
            while (auto.length+k==-1 || typeof auto[auto.length+k][0]== 'string'){
                k--;
            }
            var x :number = ((auto.at(k) as number[][]).at(-1) as number[])[0];
            var y :number = ((auto.at(k) as number[][]).at(-1) as number[])[1];
            setAuto((prevAuto) => [
                ...prevAuto, 
                [action, x, y]
            ]);
        }
    }

    return (
      <div className="ActionComponent" key={action} onClick={handleClick}>
        <span>{action}</span>
      </div>
    );
  }
  
  export default Action;
  