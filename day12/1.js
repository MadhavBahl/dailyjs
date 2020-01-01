/**
 * Write a function which returns the sum of its arguments 
 * given that you don't know the number of arguments
 */

// Using normal for loop
function argSum1 (...args) {
    let sum = 0;
    for (let i=0; i<args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log ('argSum1 (1, 2, 3, 4, 5):  ', argSum1 (1, 2, 3, 4, 5)); // 15
console.log ('argSum1 (10, 20, 30, 40):', argSum1 (10, 20, 30, 40)); // 100
console.log ('---------');

// Using forEach
function argSum2 (...args) {
    let sum = 0;
    args.forEach (arg => sum += arg);
    return sum;
}
console.log ('argSum2 (1, 2, 3, 4, 5):  ', argSum2 (1, 2, 3, 4, 5)); // 15
console.log ('argSum2 (10, 20, 30, 40):', argSum2 (10, 20, 30, 40)); // 100
console.log ('---------');

// One Liner - reduce()
const argSum3 = (...args) => args.reduce ((sum, arg) => sum+arg, 0);
console.log ('argSum3 (1, 2, 3, 4, 5):  ', argSum3 (1, 2, 3, 4, 5)); // 15
console.log ('argSum3 (10, 20, 30, 40):', argSum3 (10, 20, 30, 40)); // 100
