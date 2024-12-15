import "./Point.css"

function Point({x, y} : {x:number, y:number}) {
    return (
      <div className="Point"                 
      style={{
        left: `${x}%`,
        top: `${y}%`}}>
      </div>
    );
  }
  
  export default Point;
  