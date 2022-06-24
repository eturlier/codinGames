/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

 var inputs: string[] = readline().split(' ');
 let lightX: number = parseInt(inputs[0]); // the X position of the light of power
 let lightY: number = parseInt(inputs[1]); // the Y position of the light of power
 let initialTx: number = parseInt(inputs[2]); // Thor's starting X position
 let initialTy: number = parseInt(inputs[3]); // Thor's starting Y position
 
 // game loop
 while (true) {
     const remainingTurns: number = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
 
     let move: string = '';
     // Write an action using console.log()
     // To debug: console.error('Debug messages...');
     if (lightX >= 0 && lightX < 40 && 
         lightY >= 0 && lightY < 18 &&
         initialTx >= 0 && initialTx < 40 && 
         initialTy >= 0 && initialTy < 18) {
         if (initialTy > lightY) {
             move += "N";
             initialTy = initialTy - 1
         }
         else if (initialTy < lightY) {
             move += "S";
             initialTy = initialTy + 1
         }
          
      
         if (initialTx > lightX) {
             move += "W";
             initialTx = initialTx - 1
         }
         else if (initialTx < lightX) {
             move += "E";
             initialTx = initialTx + 1
         }
 
         console.log(move)
          
     }
 
 }
 