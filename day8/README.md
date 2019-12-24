# Day 8: Arrow Functions

![Arrow Functions](./cover.png)

Introduced in ES6, arrow function allows us to write functions in a much shorter syntax. 

If you started learning JavaScript after ES6, you must have come across arrow functions quite a lot, and they might have confused you some times. Fear not, today, let's clear all doubts!

If you are coming from any other language to JS, the syntax of arrow function might look a little new, but once you understand it, I am sure, you will never go back to the plain old `functions` (unless necessary).

Syntax wise it's easier to understand, remove the `function` keyword, declare the function like a variable, and after arguments, put a fat arrow.

Syntax won't scare you, use cases will. For example, one liner functions, no need for parenthesis in case of single argument, and the use of `this`. Let's discuss them in next sections!

## Syntax

As discussed above, remove the function keyword, declare the function as a variable (const/let/var), and put a fat arrow after the arguments.

**Normal Function**

```js
function myFunc (arg1, arg2, arg3) {
    ...
    ...
}
```

**Arrow Function**

```js
let myFunc = (arg1, arg2, arg3) => {
    ...
    ...
}
```

## [Simplest Example](./1.js)

**Write a function which takes in 2 numbers as arguments and returns their sum**

```js
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
```

## [Let's take it further](./2.js)

**Make a function which takes in an array of numbers and returns the sum**

```js
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

// Using Arrow  Functon
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
console.log (`One: Sum of elements of ${numbers} = ${addAllElements3(numbers)}`);
```

## The one liners

Even though arrow functions are more concise than normal functions, they can still be reduced.

If the arrow function has only one statement inside it, it can be reduced further into a one liner.

**Example**

```js
const add = (a, b) => a+b;
```

One liners follow the concept of implicit return, the single statement that is written after the fat arrow (without curly braces), is performed and the result is returned.

## Single Argument Benefit

We can reduce the arrow function even further. If there is only one argument, there is no need for parenthesis.

**Example**

```js
const square = a => a*a;
```

## What about `this`?

Handling of `this` is different in arrow functions as compared to normal functions.

In very simple words, in arrow functions there is no binding of `this`.

In regular functions, `this` represents the object that calls the function.

But, in arrow functions, `this` keyword always represents the object that defines the arrow function.

## [Concept 1: Arrow Functions don't bind `this`](./this1.js)

As I told, arrow functions don't bind `this`. So you have to be very careful while using `this` inside the arrow functions.

**In case of normal functions, you can do this - **

```js
// Normal function
const student1 = {
    name: 'Madhav',
    age: 21,
    greeting: function () {
        console.log (this);
        return `Hi, I am ${this.name} and I am ${this.age} years old`;
    }
}
/**
 * Output should be 
 * "Hi, I am Madhav and I am 21 years old!"
 */
console.log (student1.greeting ());
```

**Won't work in case of arrow functions**

```js
// Arrow function
const student2 = {
    name: 'Madhav',
    age: 21,
    greeting: () => {
        console.log (this);
        return `Hi, I am ${this.name} and I am ${this.age} years old`;
    }
}
/**
 * Arrow functions don't bind `this`
 * Hi, I am undefined and I am undefined years old
 */
console.log (student2.greeting ());
```

## [Concept 2: What will the `this` represent?](./this2.js)

In regular functions, `this` represents the object that calls the function.

**We won't get the desired result in this case -**

```js
// Using Normal Function
const students1 = {
    names: ['Madhav', 'John', 'Amanda'],
    team: "JS Enthusiasts",
    greeting: function () {
        return this.names.map (function (name) {
            return `Member - ${name} - belongs to team - ${this.team}`;
        });
    }
};
console.log (students1.greeting());
```

**Output:**

```js
[ 'Member - Madhav - belongs to team - undefined',
  'Member - John - belongs to team - undefined',
  'Member - Amanda - belongs to team - undefined' ]
```

**To fix this, we can use `.bind()` method**

```js
// How to fix? .bind(this)
const students2 = {
    names: ['Madhav', 'John', 'Amanda'],
    team: "JS Enthusiasts",
    greeting: function () {
        return this.names.map (function (name) {
            return `Member - ${name} - belongs to team - ${this.team}`;
        }.bind(this));
    }
}
console.log (students2.greeting ());
```

**Output:**

```js
[ 'Member - Madhav - belongs to team - JS Enthusiasts',
  'Member - John - belongs to team - JS Enthusiasts',
  'Member - Amanda - belongs to team - JS Enthusiasts' ]
```

**Here, arrow functions come into the picture...**

In arrow functions, `this` keyword always represents the object that defines the arrow function. Therefore, we can use arrow function inside the `map` helper.

```js
const students3 = {
    names: ['Madhav', 'John', 'Amanda'],
    team: "JS Enthusiasts",
    greeting: function () {
        // Arrow function inside map()
        return this.names.map ((name) => {
            return `Member - ${name} - belongs to team - ${this.team}`;
        });
    }
}
console.log (students3.js);
```

**Output:**

```js
[ 'Member - Madhav - belongs to team - JS Enthusiasts',
  'Member - John - belongs to team - JS Enthusiasts',
  'Member - Amanda - belongs to team - JS Enthusiasts' ]
```

I hope these examples cleared your concepts. But it's not over yet, you won't get confidence until you try it out yourself, so here are some practise questions for you.

## Homework for you

I agree that it will be difficult to make questions only related to arrow functions, so for your practise, try out these general questions **but the catch is, you have to use arrow functions.**

So write a function for all of these programs, and that must be an arrow function.

1. Write a function to print lucas series till `n` terms
2. Given an sentence, write a function to make it camel case it.
3. Write a function which takes in the argument `n`, and prints a pattern like this - (n=4)

```
*      *
**    **
***  ***
********
***  ***
**    **
*      *
```

4. Write a function to sort the names in a list in alphabetical order.
5. Write a function to print all the repeated elements in an array.

> These are just for practise, feel free to add more!

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>