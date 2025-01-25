import "./PathLine.css"

function PathLine({pX, pY, cX, cY} : {pX:number, pY:number, cX:number, cY: number}) {
  pY = pY + 1.02;
  cY = cY + 1.02;
  pX = pX + 0.375;
  cX = cX + 0.375;
  return (
      <div className="PathLine" key={"("+pX+", "+pY+") -> ("+cX+", "+cY+")"}                
      style={{
        top: `${(pY+cY)/2}%`, 
        width: `${Math.sqrt(Math.pow(((cX-pX)*.8), 2)+ Math.pow(((cY-pY)*.2933), 2))}vw`,
        left: `${((pX+cX)*.8 - Math.sqrt(Math.pow(((cX-pX)*.8), 2)+ Math.pow(((cY-pY)*.2933), 2)))/2}vw`,
        transform: `rotate(${Math.atan2((cY-pY)*.2933, (cX-pX)*.8)*180/3.1416}deg)`}}> 
        {/* /[ {rotate: `${Math.atan2((cY-pY)*2.934, (cX-pX)*8)} deg`} ]}}> */}
      </div>
      
    ); 
  }
  
  export default PathLine;
  