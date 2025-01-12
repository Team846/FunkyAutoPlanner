import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import "./Action.css"
import { PointToBeMade } from "../../../PathPlanner/PathField/Field";

function Action({action, auto, setAuto, setNamedAuto} : {action:string, auto:((string | number)[] | PointToBeMade[])[], setAuto: Dispatch<SetStateAction<((string | number)[] | PointToBeMade[])[]>>, setNamedAuto: Dispatch<SetStateAction<string[]>>}) {

    const handleClick =() =>{
        if (auto.length>0){
            var k=-1
            while (auto.length+k==-1 || typeof auto[auto.length+k][0]== 'string'){
                k--;
            }
            var x :number|undefined = ((auto.at(k) as PointToBeMade[]).at(-1))?.CordX;
            var y :number|undefined = ((auto.at(k) as PointToBeMade[]).at(-1))?.CordY;
            setAuto((prevAuto) => [
                ...prevAuto, 
                [action, (x as number), (y as number)]
            ]);
            setNamedAuto((prevNamedAuto) =>[
                ...prevNamedAuto,
                action
            ])
        }
    }

    return (
      <div className="ActionComponent" key={action} onClick={handleClick}>{action}
      </div>
    );
  }
  
  export default Action;
  