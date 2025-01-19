import {PointToBeMade} from "./PathPlanner/PathField/Field"
import { fieldToPercX, fieldToPercY } from "./util";


//Should take path file message, and then return a list of the PointToBeMade class
//msg is of the format: "P,100,54,30,0", where 100 is the x coord (in field inches), 54 is the y cord (in field inches), 30 is the bearing at that point, and 0 is the velocity at that point 
export function parsePathFile (msg) {
   // Split the message by newline
   const list = msg.split('\n');
   // Create a new list to store all the PointToBeMade objects
   const mainList = [];
   for (var i = 0; i < list.length; ++i) {
        // Split each message by commas
        const parts = list[i].split(',');
        // Extract x and y coordinates from the split array
        const x = fieldToPercX(parseFloat(parts[1]));
        const y = fieldToPercY(parseFloat(parts[2]));
        const bearing = parseFloat(parts[3]);
        const velocity = parseFloat(parts[4]);
        // Create a new point to be made object with x, y, bearing, and velocity
        const point = new PointToBeMade(1, 1, bearing, velocity, i);
        point.CordX=x;
        point.CordY=y;
        // Adds a list containing the PointToBeMade object to the main list with all the PointToBeMade objects
        mainList.push(point);        
   }
   // Returns the main list containing all the PointToBeMade objects
   return mainList;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

export async function parseAutoFile (msg) {
   const lines = msg.split('\n');
   const namedList=[];
   const auto=[];
   for (var i=1; i<lines.length; i++){
      namedList.push(lines.at(i)?.split(',').at(1));
      if (lines.at(i)?.split(',').at(0)=='PATH' || lines.at(i)?.split(',').at(0)=='F' ){         
         await sleep(1);
         window.api.send("readFromAppFile", `/visualizer/paths/${namedList[i-1]}`, "");

         window.api.receive("fileData", (data) => {
            auto.push(parsePathFile(data));
         });
         await sleep(1);
      }
      else{
         await sleep(2);
         var k=-1
         while (auto.length+k==-1 || typeof auto[auto.length+k][0]== 'string'){
             k--;
         }
         var x= ((auto.at(k)).at(-1))?.CordX;
         var y= ((auto.at(k)).at(-1))?.CordY;
         auto.push([namedList[i-1], x, y]);
      }
   }
   await sleep(3);
   return [namedList, auto]
}