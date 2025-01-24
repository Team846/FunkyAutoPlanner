import "./Field.css"
import Point from "./Point/Point";
import Action from "./Action/Action"
import { useState } from "react";
import PathLine from "./PathLine/PathLine";
import { fieldToPercX, fieldToPercY } from "../../util";
import { PointToBeMade } from "../../PathPlanner/PathField/Field";

function Field({Auto}: {Auto: ((string | number)[] | PointToBeMade[])[]}) {
    var lastAction : string;
    var prevValue :((string | number)[] | PointToBeMade[]) = [];
    return (
      <div className="Field">
        {Auto.map((value, index) => {
          if ((typeof value[0] == "string") && (typeof prevValue[0]=="string")) {
            lastAction = lastAction + "," + value[0];
          }
          else if ((typeof value[0] == "string")) {
            console.log(lastAction);
            lastAction = value[0];
          }
          prevValue = value;
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
                }) : (
                  <Action key={index} x={Number(value[1])} 
                                      y={Number(value[2])}
                                      actionName={lastAction}/>)
                
              }
            </>
          );
        })}
        <img id="FieldImg" src="/field.png"/>
      </div>
    );
  }
  
  export default Field;
  