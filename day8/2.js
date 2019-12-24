/**
 * Sum of elements in an array
 */

const numbers = [1, 2, 3, 4, 5];

// Using Normal Function
function addAllElements1 (arr) {
    let sum = 0;
    arr.forEach (function (number) {
        sum+=number;
    });
    return sum;
}
console.log (`Normal: Sum of elements of ${numbers} = ${addAllElements1(numbers)}`);

// Using Arrow Functon
const addAllElements2 = (arr) => {
    let sum = 0;
    arr.forEach ((num) => {
        sum += num;
    })
    return sum;
}
console.log (`Arrow: Sum of elements of ${numbers} = ${addAllElements2(numbers)}`);

// One Liner
const addAllElements3 = arr => arr.reduce ((sum, num) => sum+num);
console.log (`One-Liner: Sum of elements of ${numbers} = ${addAllElements3(numbers)}`);
