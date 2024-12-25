import "./Point.css"

function Point({x, y, bearing} : {x:number, y:number, bearing:number}) {
    return (
      <>
      <div className="Robot"                 
      style={{
        left: `${x-1.65}%`,
        top: `${y-4.49}%`, 
        transform: `rotate(${bearing}deg)`}}>
      </div>  
      <div className="Point"                 
      style={{
        left: `${x-.375}%`,
        top: `${y-1.02}%`}}>
      </div> 
      </>
    );
  }
  
  export default Point;
  