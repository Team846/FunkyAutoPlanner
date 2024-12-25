import "./PathLine.css"

function PathLine({pX, pY, cX, cY} : {pX:number, pY:number, cX:number, cY: number}) {
    return (
      <div className="PathLine" key={"("+pX+", "+pY+") -> ("+cX+", "+cY+")"}                 
      style={{
        left: `${pX}%`,
        top: `${(pY+cY)/2.0}%`, 
        width: `${Math.sqrt(Math.pow(((cX-pX)*.8), 2)+ Math.pow(((cY-pY)*.2934), 2))}vw`, 
        transform: `rotate(${Math.atan2((cY-pY)*2.934, (cX-pX)*8)*180/3.141}deg)`}}> 
        {/* /[ {rotate: `${Math.atan2((cY-pY)*2.934, (cX-pX)*8)} deg`} ]}}> */}
      </div>
    );
  }
  
  export default PathLine;
  