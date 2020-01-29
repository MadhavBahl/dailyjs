# Day 25: For...In Loop

Welcome back to the day 25 of DailyJS, today's topic is `for...in` loop.

It's a very simple concept which you will be able to understand in (probably) less than a minute. So let's go.

The `for...in` loop iterates over the properties of an object.

Various loops (not including the ES6 helpers) in JS:

- **for** - loops through a block of code a number of times
- **for...in** - loops through the properties of an object
- **for...of** - loops through the values of an iterable object
- **while** - loops through a block of code while a specified condition is true
- **do/while** - loops through a block of code once, and then repeats the loop while a specified condition is true

Let's have a look at the syntax and a very simple example

## Syntax

The syntax is very similar to the `for...of` loop. 

In the `for...of` loop, we were getting each array element over an iteration, and here we are getting the key (through which we can easily find the value corresponding to that particular key)

```js
for (<var/let/const> <Iterable name> in object) {
    // Do something
    ...
    ...
}
```

## [Example](./1.js)

**Given an object having names and grades of each student, write a function which displays the scores of each student and then displays the class average.**

```js
const classScore = {
    "John": 98,
    "Kepler": 97,
    "Amanda": 86,
    "James": 85
};

const classAverage = (scores) => {
    let sum = 0, length = 0;
    for (const student in scores) {
        sum += scores[student];
        console.log (`${student} has a score: ${scores[student]}`);
        length++;
    }
    return sum/length;
}

const avg = classAverage (classScore);
console.log (`Class average is: ${avg}`);
```

That's it for today, see you tomorrow :)