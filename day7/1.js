/**
 * Sum the numbers given in the array
 */

const numbers = [ 1, 2, 3, 4, 5 ];
let sum = 0;

// Without reduce helper
for (let i=0; i<numbers.length; i++) {
    sum += numbers[i];
}
console.log ("Sum using normal for: ", sum);

// Using forEach
let sum2 = 0;
numbers.forEach (number => sum2 += number);
console.log ("Sum using forEach: ", sum2);

// Using reduce
let sum3 = numbers.reduce (function (total, number) {
    return total + number;
}, 0); // Initial value = 0
console.log ("Sum using reduce: ", sum3);

// One liner
let sum4 = numbers.reduce ((sum, number) => sum+number, 0);
console.log ("One liner: ", sum4);