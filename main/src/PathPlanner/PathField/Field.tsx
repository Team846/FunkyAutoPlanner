import "./Field.css"
import Point from "./Point/Point";

function Field() {


    const handleFieldClick =() => {
        //Add func. that adds points on the location you clicked
    }

    return (
      <div className="Field">
        <Point x={100} y={100}/>
        <img onClick={handleFieldClick} id="FieldImg" src="/field.png"/>
      </div>
    );
  }
  
  export default Field;
  