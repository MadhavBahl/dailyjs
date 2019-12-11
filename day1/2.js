/* ================================================= */
/* ================ Daily JS - Day 1 =============== */
/* ===== Helper Functions - The forEach helper ===== */
/* ================================================= */

/**
 * Sum of each element in array of numbers
 *  1. Create an array of numbers
 *  2. Create a variable to hold the sum
 *  3. Loop over the array and increment the sum value
 *  4. print the sum variable
 */

const numbers = [6, 1, 2, 3, 8];
let sum = 0;

numbers.forEach (number => {
    sum += number;
});

console.log (sum);