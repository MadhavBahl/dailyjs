/**
 * Write a function which takes in 2 numbers as arguments 
 * and returns their sum
 */

const a = 10;
const b = 40;

// Normal Function
function sumTwoNums1 (num1, num2) {
    return num1+num2;
}
console.log (`Normal: ${a} + ${b} = ${sumTwoNums1(a, b)}`);

// Arrow Function
const sumTwoNums2 = (num1, num2) => {
    return num1+num2;
}
console.log (`Arrow: ${a} + ${b} = ${sumTwoNums2(a, b)}`);

// One Liner
const sumTwoNums3 = (num1, num2) => num1+num2;
console.log (`One Liner: ${a} + ${b} = ${sumTwoNums3(a, b)}`);
