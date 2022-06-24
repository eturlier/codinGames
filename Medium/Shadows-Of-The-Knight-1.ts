/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs: string[] = readline().split(' ');
 const W: number = parseInt(inputs[0]); // width of the building.
 const H: number = parseInt(inputs[1]); // height of the building.
 const N: number = parseInt(readline()); // maximum number of turns before game over.
 var inputs: string[] = readline().split(' ');
 let X0: number = parseInt(inputs[0]);
 let Y0: number = parseInt(inputs[1]);
 
 let XMin: number = 0;
 let YMin: number = 0;
 let XMax: number = W -1;
 let YMax: number = H -1;
 
 // game loop
 while (true) {
     const bombDir: string = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
 
     // Write an action using console.log()
     // To debug: console.error('Debug messages...');
     if (bombDir.includes('U')) {
         YMax = Y0 - 1;
     } else if (bombDir.includes('D')) {
         YMin = Y0 + 1;
     }
 
     if (bombDir.includes('L')) {
         XMax = X0 - 1;
     } else if (bombDir.includes('R')) {
         XMin = X0 + 1;
     }
 
     // the location of the next window Batman should jump to.
     X0 = XMin + (XMax - XMin) / 2;
     Y0 = YMin + (YMax - YMin) / 2;
     console.log(Math.floor(X0) + ' ' + Math.floor(Y0));
 }
 