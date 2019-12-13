# Day 2: The `map` helper

![The map helper](./cover.png)

The `map()` helps to make a new array from the elements of the given array by performing some action on each element.

In simple language, The `map` helper takes a function as the argument and performs that function on each element of the given array (in order of index) to create a new array without changing the original array.

## [Example](./1.js)

**Form a new array which contains the square of each number of the given array**

```js
const numbers = [1, 2, 3, 4, 5];
let squaredNumbers = [];

// Without `map()`
for (let i=0; i<numbers.length; i++) {
    squaredNumbers.push (numbers[i]*numbers[i]);
}
console.log ('Without map: ', squaredNumbers);

// With `map()`, without arrow function
let squaredNumbers2 = numbers.map (function (number) {
    return number*number;
});
console.log ('With map, without arrow function', squaredNumbers2);

// With `map()`, with arrow function
let squaredNumbers3 = numbers.map (number => number*number);
console.log ('With map, with arrow function', squaredNumbers3);
```

## Syntax

```js
array.map(function(currentValue, index, arr), thisValue)
```

- **currentValue**: Required.
    The value of the current element.
- **index**: Optional.
    The array index of the current element.
- **arr**: Optional.
    The array object the current element belongs to.

## Why creating a new array is a good practise

When the code base is small, we tend to perform all the actions on the same data structure and feel free to change it easily because we know wherever it is being used, but when the code base becomes huge and we are not sure whether a given data structure is being used at other place or not, it is not good to change it directly as it might lead to some inconsistencies at the other places where it is being used

Generally, we try not to mutate any given data structure, because it's possible that the given data structure could have been used in some other place as well and changing it might break our code.

The `map` helper comes to the rescue at such places, it applies a particular function to each element in an array and return a new array without changing the original one.

## Practise questions

1. [Make an array of numbers that are doubles of the first array](./exercises/1.js)
     
2. [Take an array of numbers and convert each element into a string](./exercises/2.js)
  
3. [Capitalize the first letter of each name in the names array](./exercises/3.js)

4. [Given an of news headlines (take some random data), and enclose the headlines in `<h1>` tag and append them to DOM to display the news headlines](./exercises/4.js)

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>

## Carbon code sample

![sample](./ebook_content/3.png)