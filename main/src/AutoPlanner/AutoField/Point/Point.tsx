import "./Point.css"

function Point({x, y} : {x:number, y:number}) {
    return (
      <div className="Point" key={"("+x+", "+y+")"}                 
      style={{
        left: `${x-.375}%`,
        top: `${y-1.02}%`}}>
      </div>
    );
  }
  
  export default Point;
  