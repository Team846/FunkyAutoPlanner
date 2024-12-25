import "./Field.css"
import Point from "./Point/Point";
import React, { useState } from "react";
import { parsePathFile } from "../../parser";



export class PointToBeMade{
    constructor(x: number, y:number, bearing:number, velocity:number) {
          x = 100 * x / window.innerWidth;
          y = 100 * (y-56) / window.innerHeight;
          //Converts the position of the mouse into terms of vw and vh
          this.CordX = (x - 10) * 1.25;
          this.CordY = y * 3.5;
          //Converts position of the mouse into percentages relative to the field
          this.bearing = bearing;
          this.velocity = velocity;
    }
  
      CordX: number;
      CordY: number;
      bearing: number;
      velocity: number;
  };

function Field() {
    const handleFieldClick =(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        //Func. that adds points on the location you clicked
        var p = new PointToBeMade((e.clientX), (e.clientY), 0, 0);
        setP(p);
        var NewListOfPoints = listOfPoints;
        NewListOfPoints.push(p);
        setListOfPoints(NewListOfPoints);
    };

    var newP = new PointToBeMade(0, 0, 0, 0);
    const[p, setP] = useState(newP);
    const[listOfPoints, setListOfPoints] = useState(parsePathFile("P,100,54,30,0\nP,200,154,130,10\nP,300,254,130,20"));
    const listOfPointsItems = listOfPoints.map((pnt) => <Point x={pnt.CordX} y={pnt.CordY}/>);
    return (
      <div className="Field">
        <img onClick={(e) => {
         handleFieldClick(e)
       }} id="FieldImg" src="/field.png"/>
       <ul>{listOfPointsItems}</ul>
       <Point x={50} y={50}/>
      </div>
    );
  }
  
  export default Field;
  