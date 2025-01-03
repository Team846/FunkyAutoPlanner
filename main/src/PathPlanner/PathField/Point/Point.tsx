import "./Point.css"
import React, {useState, useEffect} from "react";

function Point({x, y, bearing, onClick, index, updatePointPosition} : {x:number, y:number, bearing:number, onClick:Function, index:number, updatePointPosition: (index: number, newPosition: { x: number, y: number }) => void;}) {
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: x - 0.375, y: y - 1.02 });

  const handleMouseDown = () => {
    setPressed(true);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (pressed) {
      const xMovement = (100 * event.movementX) / (0.8 * window.innerWidth);
      const yMovement = (100 * event.movementY) / (0.2933 * window.innerHeight);
      setPosition((prev) => {
        const newPos = {
          x: prev.x + xMovement,
          y: prev.y + yMovement,
        };
        updatePointPosition(index, newPos);
        return newPos;
      });
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setPressed(false);
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  return (
    <>
      <div className="Point"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={() => onClick(index)}
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}

      />
      <div
        className="Robot"
        onClick={() => onClick(index)}
        style={{
          left: `${position.x - 1.275}%`,
          top: `${position.y - 3.47}%`,
          transform: `rotate(${bearing}deg)`,
        }}
      />
    </>
  );
}

  
  export default Point;
  