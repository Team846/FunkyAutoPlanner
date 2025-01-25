import "./Field.css";
import React, { Dispatch, SetStateAction } from "react";
import Point from "./Point/Point";
import PathLine from "../../AutoPlanner/AutoField/PathLine/PathLine";

export class PointToBeMade {
  constructor(x: number, y: number, bearing: number, velocity: number, index: number) {
    x = (100 * x) / window.innerWidth;
    y = (100 * y) / window.innerWidth;
    this.CordX = (100 * (x - 10)) / 80;
    this.CordY = (100 * y) / 29.33;
    this.bearing = bearing;
    this.velocity = velocity;
    this.index = index;
  }
  CordX: number;
  CordY: number;
  bearing: number;
  velocity: number;
  index: number;
}

function Field({listOfPoints, setListOfPoints, onPointClick,}: {listOfPoints: PointToBeMade[]; setListOfPoints: Dispatch<SetStateAction<PointToBeMade[]>>; onPointClick: Function;}) {
  const handleFieldClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const p = new PointToBeMade(e.clientX, e.clientY, 0, 0, listOfPoints.length);
    setListOfPoints((prev) => [...prev, p]);
  };

  const updatePointPosition = (index: number, newPosition: { x: number; y: number }) => {
    setListOfPoints((prevPoints) => {
      const updatedPoints = [...prevPoints];
      updatedPoints[index] = {
        ...updatedPoints[index],
        CordX: newPosition.x,
        CordY: newPosition.y,
      };
      return updatedPoints;
    });
  };

  return (
    <div className="Field">
      <img
        onClick={handleFieldClick}
        id="FieldImg"
        src="/field.png"
      />
      <ul>
        {listOfPoints.map((pnt, i) => (
          <Point key={i} x={pnt.CordX} y={pnt.CordY} bearing={pnt.bearing} index={i} onClick={onPointClick} updatePointPosition={updatePointPosition}
          />
        ))}
      </ul>
      {listOfPoints.map((PointP, index) => {
        if (index > 0) {
          const prevPoint = listOfPoints[index - 1];
          return (
            <PathLine
              key={`line-${index}`}
              pX={prevPoint.CordX}
              pY={prevPoint.CordY}
              cX={PointP.CordX}
              cY={PointP.CordY}
            />
          );
        }
      })}
    </div>
  );
}

export default Field;
