import { Dispatch, SetStateAction, useState } from 'react';
import { PointToBeMade } from "../../PathPlanner/PathField/Field";
import Point from "../AutoField/Point/Point";


function PathPlaybacker({Auto}: {Auto: ((string | number)[] | PointToBeMade[])[]}) {
  const [RobotLocation, SetRobotLocation] = useState({ x: -10, y: -10, bearing: 0 });
  let playbackSteps: { x: number; y: number; bearing: number }[] = [];

  const playback = () => {
    {Auto.map((value, index) => {
      let accumulatedLocation = { x: 0, y: 0, bearing: 0 };
      if (typeof value[0]!="string") {
        value.map((point, r) => {
          var rP = point as PointToBeMade;
          rP.CordX = rP.CordX;
          rP.CordY = rP.CordY;
            if (r==0){
                accumulatedLocation = {
                  x: rP.CordX, 
                  y: rP.CordY, 
                  bearing: rP.bearing,
                };
                playbackSteps.push({ ...accumulatedLocation });
              }
            else{  
              var prevPoint = value[r-1];
              var rpPrev = prevPoint as PointToBeMade;
              var yTotal = (rP.CordY-rpPrev.CordY) * 0.8 * 0.367;
              var xTotal = (rP.CordX-rpPrev.CordX) * 0.8;
              var length = Math.sqrt(Math.pow((xTotal), 2)+ Math.pow(yTotal, 2));
              var angle = Math.atan2(yTotal, xTotal);
              var x = 0.1 * Math.cos(angle) / 0.8;
              var y = 0.1 * Math.sin(angle) / (0.8 * 0.367);
              if (rP.bearing - rpPrev.bearing <= 180) {
                var bearing_change = (rP.bearing - rpPrev.bearing)/(length/0.1); 
              }
              else {
                var bearing_change = (rP.bearing-rpPrev.bearing - 360)/(length/0.1); 
              }
              for (let i = 0; i < (length/0.1); i++) {
                accumulatedLocation = {
                  x: accumulatedLocation.x + x,
                  y: accumulatedLocation.y + y,
                  bearing: accumulatedLocation.bearing + bearing_change,
                };
                playbackSteps.push({ ...accumulatedLocation });
              }
            }
          });
          
        }     
     });
    }
  }


  const HandleClick = () => {
    playback();
  let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < playbackSteps.length) {
        SetRobotLocation(playbackSteps[stepIndex]);
        stepIndex++;
      } else {
        clearInterval(interval);
        let resetLocation = { x: -10, y: -10, bearing: -10 };
        SetRobotLocation(resetLocation);
      }
    }, 20);  
  }


    return (
      <div className="PathPlayback">
        <button onClick={HandleClick}>Playback</button>
        <Point x={RobotLocation.x}  y={RobotLocation.y} bearing={RobotLocation.bearing}/>
      </div>
    );
  }
  
export default PathPlaybacker;