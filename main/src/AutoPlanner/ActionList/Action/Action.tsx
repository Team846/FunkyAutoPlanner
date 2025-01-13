import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import "./Action.css"
import { PointToBeMade } from "../../../PathPlanner/PathField/Field";

function Action({action,auto, setAuto, setNamedAuto,}: {action: string; auto: ((string | number)[] | PointToBeMade[])[]; setAuto: Dispatch<SetStateAction<((string | number)[] | PointToBeMade[])[]>>; setNamedAuto: Dispatch<SetStateAction<string[]>>;}) {
    const [showPopup, setShowPopup] = useState(false);
    const [inputValue, setInputValue] = useState("");
  
    const handleClick = () => {
      if (action === "wait") {
        setShowPopup(true); 
      } else {
        if (auto.length > 0) {
          let k = -1;
          while (auto.length + k == -1 || typeof auto[auto.length + k][0] == "string") {
            k--;
          }
          const x: number | undefined = ((auto.at(k) as PointToBeMade[]).at(-1))?.CordX;
          const y: number | undefined = ((auto.at(k) as PointToBeMade[]).at(-1))?.CordY;
          setAuto((prevAuto) => [
            ...prevAuto,
            [action, x as number, y as number],
          ]);
          setNamedAuto((prevNamedAuto) => [...prevNamedAuto, action]);
        }
      }
    };
  
    const handleClosePopup = () => {
      setShowPopup(false); 
      if (auto.length > 0) {
        let k = -1;
        while (auto.length + k == -1 || typeof auto[auto.length + k][0] == "string") {
          k--;
        }
        const x: number | undefined = ((auto.at(k) as PointToBeMade[]).at(-1))?.CordX;
        const y: number | undefined = ((auto.at(k) as PointToBeMade[]).at(-1))?.CordY;
        setAuto((prevAuto) => [
          ...prevAuto,
          [action + " " + inputValue, x as number, y as number],
        ]);
        setNamedAuto((prevNamedAuto) => [...prevNamedAuto, action+" " +inputValue]);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value); 
        console.log(inputValue);
      };
    
    return (
      <div>
        <div className="ActionComponent" key={action} onClick={handleClick}>
          {action}
        </div>
  
        {showPopup && action === "wait" && (
          <div className="popup">
            <div className="popup-content">
              <p>Enter the Time</p>
              <input 
              type="text" 
              value={inputValue} 
              onChange={handleInputChange} 
              placeholder="Enter a value" 
            />
          
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Action;