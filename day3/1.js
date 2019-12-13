/**
 * Given an array of numbers,
 * find the first element which is a multiple of 7
 */

const numbers = [1, 13, 15, 18, 28, 32, 47, 50];
let firstMultiple;

// Without the `find` helper
for (let i=0; i<numbers.length; i++) {
    if (numbers[i]%7 === 0) {
        firstMultiple = numbers[i];
        break;
    }
}
console.log (firstMultiple);

// With `find` helper (without arrow func)
let firstMultiple2 = numbers.find (function (number) {
    if (number%7 === 0) {
        return true;
    }
});
console.log (firstMultiple2);

// With `find` helper (with arrow func)
let firstMultiple3 = numbers.find (number => number%7 === 0);
console.log (firstMultiple3);
