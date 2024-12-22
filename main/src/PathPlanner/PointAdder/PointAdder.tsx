import { Dispatch, SetStateAction, useState } from "react";
import "./PointAdder.css"

function PointAdder({setPath}: {setPath: Dispatch<SetStateAction<(string | number[])[]>>}) {

    const [x, setX] = useState("");
    const [y, setY] = useState("");

    const addPoint = () =>{
        if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))){
            console.error("Input not numbers...")
        }
        else{
            var pt = [parseFloat(x), parseFloat(y), 0, 0];
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
        <div className="label">x: </div>
        <input value={x} onChange={evt => setX(evt.target.value)}/>
        <div className="label">y: </div>
        <input value={y} onChange={evt => setY(evt.target.value)}/>
        <div className="adder" onClick={addPoint}>+</div>
      </div>
    );
  }
  
  export default PointAdder;
  