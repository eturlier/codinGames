/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const MESSAGE: string = readline();
 const regex = /([0-9])\1*/g;
 let code = '';
 
 let binaryResult: string = ''; 
 for (let i = 0; i < MESSAGE.length; i++) {
     const binary = translateToBinary(MESSAGE[i]);
     binaryResult += binary;
 }
 
 console.error(binaryResult);
 let binaryArrayResults: Array<string> = binaryResult.match(regex);
 if (!!binaryArrayResults) {
     for (let i = 0; i < binaryArrayResults.length; i++) {
         let result = '';
         result += binaryArrayResults[i][0] === '0' ? '00 ' : '0 ';
         result += '0'.repeat(binaryArrayResults[i].length);
         code += result + ' ';
    }
 }
 
 function translateToBinary(char: string): string {
     let indexAscii = char.charCodeAt(0);
     let binary = indexAscii.toString(2);
     return binary.length < 7 ? ('0000000'.concat(binary)).slice(-7) : binary;
 }
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 console.log(code.replace(/\s+$/, ''));
 
 