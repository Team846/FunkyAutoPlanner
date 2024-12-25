import {PointToBeMade} from "./PathPlanner/PathField/Field"


//Should take path file message, and then return a list of the PointToBeMade class
//msg is of the format: "P,100,54,30,0", where 100 is the x coord (in field inches), 54 is the y cord (in field inches), 30 is the bearing at that point, and 0 is the velocity at that point 
export function parsePathFile (msg: string) {
   // Split the message by newline
   const list = msg.split('\n');
   // Create a new list to store all the PointToBeMade objects
   const mainList = [];
   for (var i = 0; i < list.length; ++i) {
        // Split each message by commas
        const parts = msg[i].split(',');
        // Extract x and y coordinates from the split array
        const x = parseFloat(parts[1]);
        const y = parseFloat(parts[2]);
        const bearing = parseFloat(parts[3]);
        const velocity = parseFloat(parts[4]);
        // Create a new point to be made object with x, y, bearing, and velocity
        const point = new PointToBeMade(x, y, bearing, velocity, i);
        // Adds a list containing the PointToBeMade object to the main list with all the PointToBeMade objects
        mainList.push(point);        
   }
   // Returns the main list containing all the PointToBeMade objects
   return mainList;
}
