import "./PathLine.css"

function PathLine({pX, pY, cX, cY} : {pX:number, pY:number, cX:number, cY: number}) {
  pY = pY + 0.0;
  cY = cY + 0.0;
  pX = pX -0.0;
  cX = cX -0.0;
  return (
      <div className="PathLine" key={"("+pX+", "+pY+") -> ("+cX+", "+cY+")"}                
      style={{
        top: `${(pY+cY)/2}%`, 
        width: `${Math.sqrt(Math.pow(((cX-pX)*0.6987), 2)+ Math.pow(((cY-pY)*.32), 2))}vw`,
        left: `${((pX+cX)*.6987 - Math.sqrt(Math.pow(((cX-pX)*.6987), 2)+ Math.pow(((cY-pY)*.32), 2)))/2}vw`,
        transform: `rotate(${Math.atan2((cY-pY)*.32, (cX-pX)*.6987)*180/3.1416}deg)`}}> 
        {/* /[ {rotate: `${Math.atan2((cY-pY)*2.934, (cX-pX)*8)} deg`} ]}}> */}
      </div>
      
    ); 
  }
  
  export default PathLine;
  