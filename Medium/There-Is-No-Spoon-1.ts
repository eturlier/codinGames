/**
 * Don't let the machines win. You are humanity's last hope...
 **/

 const width: number = parseInt(readline()); // the number of cells on the X axis
 const height: number = parseInt(readline()); // the number of cells on the Y axis
 const nodes: any[] = [];
 for (let i = 0; i < height; i++) {
     const line: string = readline(); // width characters, each either 0 or .
     nodes.push(line.split(""));
 }
 
 // Write an action using console.log()
 // To debug: console.error('Debug messages...');
 if (!!nodes && nodes.length) {
    for (let y1 = 0; y1 < height; y1++) {
        for (let x1 = 0; x1 < width; x1++) {
             if (nodes[y1] && nodes[y1].length && nodes[y1][x1] === "0") {
                let [x2, y2] = getNextLeft(x1, y1);
                let [x3, y3] = getNextBottom(x1, y1);
            
                console.log(`${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`);
            }
        }
    }
 }

 
 function getNextLeft(x: number, y: number): number[] | string[] {
     for (let i = x + 1; i < width; i++) {
         if (nodes[y][i] === "0") {
           return [i, y];
         }
     }
     return ['-1', '-1'];
 }
 
 function getNextBottom(x: number, y: number): number[] | string[] {
     for (let i = y + 1; i < height; i++) {
         if (nodes[i][x] === "0") {
           return [x, i];
         }
     }
     return ['-1', '-1'];
 }
 