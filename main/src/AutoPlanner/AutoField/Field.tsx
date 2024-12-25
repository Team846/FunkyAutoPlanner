import "./Field.css"
import Point from "./Point/Point";
import Action from "./Action/Action"
import { useState } from "react";
import PathLine from "./PathLine/PathLine";
import { fieldToPerc } from "../../util";

function Field({Auto}: {Auto: ((string | number)[] | number[][])[]}) {

    return (
      <div className="Field">
        {Auto.map((value, index) => {
          return (
            <>
              {typeof value[0]!="string" ? 
                value.map((point, r) => {
                  var rP;
                  rP = Array.isArray(point) ? fieldToPerc(point[0], point[1]) : [-10, -10];
                  if (r==0){
                    return(
                      <Point x={rP[0]}  y={rP[1]}/>
                    );
                  }
                  else{
                    var prevPoint = value[r-1];
                    var rpPrev = Array.isArray(prevPoint) ? fieldToPerc(prevPoint[0], prevPoint[1]) :[-10, -10];
                    return (<>
                      <Point x={rP[0]}  y={rP[1]}/>
                      <PathLine pX={rpPrev[0]} pY={rpPrev[1]} cX={rP[0]} cY={rP[1]}/>
                    </>)
                  }
                }) :
                
                  <Action key={index} x={fieldToPerc(Number(value[1]), Number(value[2]))[0]} 
                                      y={fieldToPerc(Number(value[1]), Number(value[2]))[1]}
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
  