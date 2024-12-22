import "./Field.css"
import Point from "./Point/Point";

function Field() {


    const handleFieldClick =(e : React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        <Point x={e.clientX} y={e.clientY}></Point>
        console.log("hi")
        //Add func. that adds points on the location you clicked
    }

    return (
      <div className="Field">
        <Point x={100} y={100}/>
        <img onClick={(e) => {
            console.log("Clicked")
            handleFieldClick(e)
        }} id="FieldImg" src="/field.png"/>
      </div>
    );
  }
  
  export default Field;
  