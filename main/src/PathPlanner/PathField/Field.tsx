import "./Field.css"
import Point from "./Point/Point";
import React, { useState } from "react";


export class PointToBeMade{
    constructor(x: number, y:number) {
          this.TopLeftX = 10;
          this.TopLeftY = 0;
          this.BottomRightX = 90;
          this.BottomRightY = 28.6;
          this.UnitConversionX = 100/(this.BottomRightX - this.TopLeftX);
          this.UnitConversionY = 100/(this.BottomRightY - this.TopLeftY);
          x = 100 * x / window.innerWidth;
          y = 100 * (y-56) / window.innerHeight;
          this.CordX = (x - this.TopLeftX) * this.UnitConversionX;
          this.CordY = (y - this.TopLeftY) * this.UnitConversionY;
    }
      CordX: number;
      CordY: number;
      TopLeftX: number;
      TopLeftY: number;
      BottomRightX: number;
      BottomRightY: number;
      UnitConversionX: number;
      UnitConversionY: number;
  };

function Field() {
    const handleFieldClick =(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        //Func. that adds points on the location you clicked
        var p = new PointToBeMade((e.clientX), (e.clientY));
        setP(p);
        var NewListOfPoints = listOfPoints;
        NewListOfPoints.push(p);
        setListOfPoints(NewListOfPoints);
    };

    var newP = new PointToBeMade(0, 0);
    const[p, setP] = useState(newP);
    const[listOfPoints, setListOfPoints] = useState([new PointToBeMade(0, 0)]);
    const listOfPointsItems = listOfPoints.map((pnt) => <Point x={pnt.CordX} y={pnt.CordY}/>);
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
  