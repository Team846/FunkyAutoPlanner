import "./Field.css"
import Point from "./Point/Point";
import Action from "./Action/Action"
import { useState } from "react";
import PathLine from "./PathLine/PathLine";
import { fieldToPercX, fieldToPercY } from "../../util";
import { PointToBeMade } from "../../PathPlanner/PathField/Field";

function Field({Auto}: {Auto: ((string | number)[] | PointToBeMade[])[]}) {

    return (
      <div className="Field">
        {Auto.map((value, index) => {
          return (
            <>
              {typeof value[0]!="string" ? 
                value.map((point, r) => {
                  var rP = point as PointToBeMade;
                  if (r==0){
                    return(
                      <Point x={rP.CordX}  y={rP.CordY} bearing={rP.bearing}/>
                    );
                  }
                  else{
                    var prevPoint = value[r-1];
                    var rpPrev = prevPoint as PointToBeMade;
                    return (<>
                      <Point x={rP.CordX}  y={rP.CordY} bearing={rP.bearing}/>
                      <PathLine pX={rpPrev.CordX} pY={rpPrev.CordY} cX={rP.CordX} cY={rP.CordY}/>
                    </>)
                  }
                }) :
                
                  <Action key={index} x={Number(value[1])} 
                                      y={Number(value[2])}
                                      actionName={value[0]}/>
                
              }
            </>
          );
        })}
        <img id="FieldImg" src="/field.png"/>
      </div>
    );
  }
  
  export default Field;
  