import "./Point.css"

function Point({x, y, bearing, onClick, index} : {x:number, y:number, bearing:number, onClick:Function, index:number}) {
    return (
      <>
      <div className="Robot"    onClick={()=>{onClick(index)}}             
      style={{
        left: `${x-1.65}%`,
        top: `${y-4.49}%`, 
        transform: `rotate(${bearing}deg)`}}>
      </div>  
      <div className="Point" onClick={()=>{onClick(index)}}             
      style={{
        left: `${x-.375}%`,
        top: `${y-1.02}%`}}>
      </div> 
      </>
    );
  }
  
  export default Point;
  