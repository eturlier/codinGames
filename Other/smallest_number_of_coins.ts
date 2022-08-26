/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const S: string = readline().replace('$', '');
const amount: number = +S;
const coins: number[] = [0.01, 0.05, 0.1, 0.25, 1.0];

function SmallestNumberOfCoins(testAmount: number): number[] {
  let pre_result = [0, 0, 0, 0, 0];
  for (let i = coins.length - 1; i >= 0; i--) {
    while (testAmount >= coins[i]) {
      testAmount -= coins[i];
      pre_result[i] = pre_result[i] + 1;
    }
  }
  return pre_result;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
const result: number[] = SmallestNumberOfCoins(amount).reverse();
console.log(result.join(' '));
