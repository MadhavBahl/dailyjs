# Day 24: The `for .. of` loop

Welcome back to the 24th day of DailyJS. Today's topic is the `for of` loop.

You might have seen an exact same thing in some other languages as well. As the name (`loop`) suggests, it is used to iterate over the iterable objects

- String
- Array
- TypedArray
- Map
- Set
- User-defined iterables

Let's have a look at the syntax

## Syntax

Syntax of the for..of loop is probably one of the easiest things to understand, basically you can iterate over each element of the iterable like this - 

```js
const myArr = ['A', 'B', 'C'];

for (const element of myArr) {
    // Do something with the "element"
    ...
    ...
}
```

## [Example 1 - Iterating over an Array](./1.js)

**Find the sum of all elements in an array using for..of loop**

```js
// Iterating over an array

const sumAll = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

const myArr = [1, 2, 3, 4, 5];
console.log ('Sum of', myArr, ' = ', sumAll (myArr));
```

## [Example 2 - Iterating over a String](./2.js)

**Write a function to reverse a string using for..of loop**

```js
const reverseStr = (sentence) => {
    let reversed = '';
    for (const letter of sentence) {
        reversed = letter + reversed;
    }
    return reversed;
}

const myStr = 'Hello World!';
console.log (`Reverse of "${myStr}" = ${reverseStr(myStr)}`);
```

## [Example 3 - Iterating over a Map](./3.js)

```js
const myMap = new Map ([['a', 1], ['b', 2]]);

for (const [key, val] of myMap) {
    console.log ('Key: ', key);
    console.log ('Val: ', val);
}
```

That's it for today, see you tomorrow :)