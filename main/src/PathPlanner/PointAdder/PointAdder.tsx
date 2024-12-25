import { Dispatch, SetStateAction, useState } from "react";
import "./PointAdder.css"
import { fieldToPercX, fieldToPercY } from "../../util";
import { PointToBeMade } from "../PathField/Field";

function PointAdder({path, setPath}: {path: PointToBeMade[], setPath: Dispatch<SetStateAction<(PointToBeMade)[]>>}) {

    const [x, setX] = useState("");
    const [y, setY] = useState("");

    const addPoint = () =>{
        if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))){
            console.error("Input not numbers...")
        }
        else{
            var pt = new PointToBeMade(0, 0, 0, 0, path.length);
            pt.CordX=fieldToPercX(Number(x))
            pt.CordY=fieldToPercY(Number(y))
            setX("");
            setY("");
            setPath((prevPath) =>[
                ...prevPath, 
                pt
            ])

        }
    };

    return (
      <div className="PointAdder">
        <div className="contain">
          <div className="container">
            <div className="label">x: </div>
            <input className="x-input" type="number" value={x} onChange={evt => setX(evt.target.value)}/>
          </div>
          <div className="container">
            <div className="label">y: </div>
            <input className="y-input" type="number" value={y} onChange={evt => setY(evt.target.value)}/>
          </div>
          <div className="adder" onClick={addPoint}>+</div>
        </div>
        <input className="add-comments" placeholder="Comments" />
      </div>
    );
  }
  
  export default PointAdder;
  