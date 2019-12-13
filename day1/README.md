# Day 1: The `forEach` Helper

![The forEach helper](./cover.png)

The `forEach` helper function can be seen as an alternative to the regular for loop. The `forEach()` method basically calls a function (called `iterator function`) once for each element in the array, in order. 

In simple language, the forEach method loops through each element in an array and runs a function on that particular element.

## Example

```js
// Iteration through array

var fruits = [ 'mango', 'orange', 'pineapple', 'guava' ];

// Baisc Syntax

for (var i=0; i<fruits.length; i++) {
    console.log (fruits[i]);
}

// forEach syntax

fruits.forEach (function (fruit) {
    console.log (fruit);
});

// forEach with arrow function

fruits.forEach (fruit => {
    console.log (fruit);
})
```

## Another Example

Find the sum of each element in an array of numbers.

[**Solution**](./2.js)

```js
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
```

## Syntax

```js
array.forEach(function(currentValue, index, arr), thisValue)
```

- **currentValue**: Required. The value of the current element
- **index**: Optional. The array index of the current element
- **arr**: Optional. The array object the current element belongs to
- **thisValue**: Optional. A value to be passed to the function to be used as its "this" value.

## Why forEach?

- Less Amount of Code
- More Readable
- Less Chances of error

## Practise questions

To be added...

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>

## Further Read

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## Carbon Code Sample

![code](https://user-images.githubusercontent.com/26179770/68589845-02bfc200-04b3-11ea-8e46-a74e8de8f16c.png)

## Carbon Link:

[Carbon](https://carbon.now.sh/?bg=rgba(248%2C231%2C28%2C1)&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira%20Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%252F*%2520%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%2520*%252F%250A%252F*%2520%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%2520Daily%2520JS%2520-%2520Day%25201%2520%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%2520*%252F%250A%252F*%2520%253D%253D%253D%253D%253D%2520Helper%2520Functions%2520-%2520The%2520forEach%2520helper%2520%253D%253D%253D%253D%253D%2520*%252F%250A%252F*%2520%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%253D%2520*%252F%250A%250A%252F**%250A%2520*%2520Sum%2520of%2520each%2520element%2520in%2520array%2520of%2520numbers%250A%2520*%2520%25201.%2520Create%2520an%2520array%2520of%2520numbers%250A%2520*%2520%25202.%2520Create%2520a%2520variable%2520to%2520hold%2520the%2520sum%250A%2520*%2520%25203.%2520Loop%2520over%2520the%2520array%2520and%2520increment%2520the%2520sum%2520value%250A%2520*%2520%25204.%2520print%2520the%2520sum%2520variable%250A%2520*%252F%250A%250Aconst%2520numbers%2520%253D%2520%255B6%252C%25201%252C%25202%252C%25203%252C%25208%255D%253B%250Alet%2520sum%2520%253D%25200%253B%250A%250Anumbers.forEach%2520(number%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520sum%2520%252B%253D%2520number%253B%250A%257D)%253B%250A%250Aconsole.log%2520(sum)%253B)