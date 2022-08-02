/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const N: number = parseInt(readline());
 var inputs: string[] = readline().split(' ');
 const operations = {'ADD': '+', 'SUB': '-', 'MUL': '*', 'DIV': '/', 'MOD': '%'};
 let stack = [];
 
 for (let i = 0; i < N; i++) {
     const instruction: string = inputs[i];
 
     if (instruction in operations) {
         const a = stack.pop();
         const b = stack.pop();
         let r: number = parseInt(eval(b + operations[instruction] + a));
         if(Number.isNaN(r)) {
             stack.push('ERROR');
         } else {
             stack.push(r);
         }
     } else if (instruction === 'POP' || instruction === 'DUP') {
         const a = stack.pop();
         if (instruction === 'DUP') {
             stack = [a, a].concat(stack);
         }
     } else if (instruction === 'SWP' && stack.length >= 2) {
         const a = stack.pop();
         const b = stack.pop();
         stack.push(a);
         stack.push(b);
     } else if (instruction === 'ROL') {
         const n = stack.pop();
         let alternativeStack = [];
         for (let i = 0; i < n; i++) {
             alternativeStack.push(stack.pop());
         }
         let top = alternativeStack.pop();
         alternativeStack.reverse();
         stack.push(...alternativeStack);
         stack.push(top);
     } else {
         stack.push(instruction);
     }
 }
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 //console.error(parseInt(stack.join(' ')))
 if (Number.isNaN(parseInt(stack.join(' ')))) {
     console.log('ERROR');
 } else {
     console.log(stack.join(' '));
 }
 
 
 