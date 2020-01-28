/**
 * For..Of Loop
 * Find the sum of all elements in an array using for..of loop
 */

const sumAll = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

const myArr = [1, 2, 3, 4, 5];
console.log ('Sum of', myArr, ' = ', sumAll (myArr));