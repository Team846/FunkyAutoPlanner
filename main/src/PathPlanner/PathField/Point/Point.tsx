import "./Point.css";
import React, { useState, useEffect } from "react";

function Point({x, y, bearing, onClick, index, updatePointPosition}: {x: number; y: number; bearing: number; onClick: Function; index: number; updatePointPosition: (index: number, newPosition: { x: number; y: number }) => void;}) {
  const [pressed, setPressed] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setPressed(false);
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPressed(true);
    setStartDrag({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseUp = () => {
    if (pressed) {
      setPressed(false);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (pressed) {
      const dx = (100 * (event.clientX - startDrag.x)) / (0.8 * window.innerWidth);
      const dy = (100 * (event.clientY - startDrag.y)) / (0.2933 * window.innerWidth);

      updatePointPosition(index, { x: x + dx, y: y + dy });

      setStartDrag({
        x: event.clientX,
        y: event.clientY,
      });

      onClick(index);
    }
  };

  return (
    <>
      <div
        className="Robot"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={() => onClick(index)}
        style={{
          left: `${x - 1.275}%`,
          top: `${y - 3.47}%`,
          transform: `rotate(${bearing}deg)`,
        }}
      />
      <div
        className="Point"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={() => onClick(index)}
        style={{
          left: `${x}%`,
          top: `${y}%`,
        }}
      />
    </>
  );
}

export default Point;
