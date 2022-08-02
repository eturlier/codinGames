/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const n: number = parseInt(readline()); // the number of temperatures to analyse
 var inputs: string[] = readline().split(' ');
 let result = 0;
 
 let test = 5526;
 
 if (inputs.length) {
     result = 0;
 }
 
 for (let i = 0; i < n; i++) {
     const t: number = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
 
 
     if (t === 0) {
         test = t;
     } else if (t > 0 && t <= Math.abs(test)) {
         test = t;
     } else if (t < 0 && -t < Math.abs(test)) {
         test = t;
     }
 
     result = test;
 }
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(result);
 