import "./Point.css"

function Point({x, y, bearing} : {x:number, y:number, bearing:number}) {
    return (
      <>
      <div className="Robot"           
      style={{
        left: `${x-2.67}%`,
        top: `${y-5.65}%`, 
        transform: `rotate(${bearing}deg)`}}>
      </div>  
      <div className="Point"          
      style={{
        left: `${x-0.4}%`,
        top: `${y-0.9}%`}}>
      </div> 
      </>
    );
  }
  
  export default Point;
  