/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const N: number = parseInt(readline());
 let arrayPi: number[] = [];
 let minDiff: number = 10000000;
 
 for (let i = 0; i < N; i++) {
     arrayPi.push(parseInt(readline()));
 }
 
 const highestToLowest: number[] = arrayPi.sort((a, b) => b - a);
 
 highestToLowest.reduce(function(prev, curr) {
     let diff: number = prev > curr ? prev - curr : curr - prev;
     minDiff = diff < minDiff ? diff : minDiff;
     return curr;
 });
 console.log(minDiff)