/**
 * Given an array of numbers, 
 * find the count of numbers greater than 100
 */

const numbers = [30, 42, 105, 294, 876, 444, 98, 55, 671];

// Without filter helper
const filteredNum = [];
for (let i=0; i<numbers.length; i++) {
    if (numbers[i] > 100)
        filteredNum.push (numbers[i]);
}
console.log ('filteredNum: ', filteredNum);

// With filter, without arrow fn
const filteredNum2 = numbers.filter (function (number) {
    return number>100;
});
console.log ('filteredNum2: ', filteredNum2);

// With filter, with arrow fn
let filteredNum3 = numbers.filter (number => number>100);
console.log ('filteredNum3: ', filteredNum3);