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
        <div className="contain">
          <div className="container">
            <div className="label">x: </div>
            <input className="x-input" value={x} onChange={evt => setX(evt.target.value)}/>
          </div>
          <div className="container">
            <div className="label">y: </div>
            <input className="y-input" value={y} onChange={evt => setY(evt.target.value)}/>
          </div>
          <div className="adder" onClick={addPoint}>+</div>
        </div>
        <input className="add-comments" placeholder="Comments" />
      </div>
    );
  }
  
  export default PointAdder;
  