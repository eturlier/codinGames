/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const L: number = parseInt(readline());
 const H: number = parseInt(readline());
 const T: string = readline().toUpperCase();
 const indexAsciiA = 65;
 for (let i = 0; i < H; i++) {
     const ROW: string = readline();
     let line = "";
     
     for (let j = 0; j < T.length; j++) {
         let indexAscii = T.charCodeAt(j) - indexAsciiA;
         // If j is not in A-Z => ?
         if (indexAscii < 0 || indexAscii >= 26) {
             indexAscii = 26; // 26 => ?
         }
         line += ROW.substring((indexAscii*L), ((indexAscii+1)*L))
     }
     console.log(line);
 }