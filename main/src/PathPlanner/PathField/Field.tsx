import "./Field.css"
import Point from "./Point/Point";
import React, { Dispatch, SetStateAction, useState } from "react";
import { parsePathFile } from "../../parser";



export class PointToBeMade{
    constructor(x: number, y:number, bearing:number, velocity:number, index:number) {
          x = 100 * x / window.innerWidth;
          y = 100 * y / window.innerWidth;
          //Converts the position of the mouse into terms of vw and vh
          this.CordX = 100*(x - 10)/80;
          this.CordY = 100*(y)/29.33;
          //Converts position of the mouse into percentages relative to the field
          this.bearing = bearing;
          this.velocity = velocity;
          this.index=index;
    }
  
      CordX: number;
      CordY: number;
      bearing: number;
      velocity: number;
      index:number;
  };

function Field({listOfPoints, setListOfPoints, onPointClick}: {listOfPoints: PointToBeMade[], setListOfPoints:  Dispatch<SetStateAction<PointToBeMade[]>>, onPointClick:Function}) {
    const handleFieldClick =(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        //Func. that adds points on the location you clicked
        var p = new PointToBeMade((e.clientX), (e.clientY), 0, 0, listOfPoints.length);
        setP(p);
        var NewListOfPoints = listOfPoints;
        NewListOfPoints.push(p);
        setListOfPoints(NewListOfPoints);
    };

    var newP = new PointToBeMade(0, 0, 0, 0, 0);
    const[p, setP] = useState(newP);
    // const[listOfPoints, setListOfPoints] = useState([new PointToBeMade(0, 0, 0, 0)]);
    const listOfPointsItems = listOfPoints.map((pnt) => <Point x={pnt.CordX} y={pnt.CordY} bearing={pnt.bearing} index={pnt.index} onClick={onPointClick}/>);
    return (
      <div className="Field">
        <img onClick={(e) => {
         handleFieldClick(e)
       }} id="FieldImg" src="/field.png"/>
       <ul>{listOfPointsItems}</ul>
      </div>
    );
  }
  
  export default Field;
  