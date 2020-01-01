# Day 12: Rest Parameters

![Rest Parameters](./cover.png)

Today's and Tomorrow's concepts are something whose syntax might confuse you a little initially if you are a beginner, but trust me, it'll only take you a few minutes to understand them.

Today we will discuss about the rest parameters,
and tomorrow we will discuss about the spread operator.

As I told you before that in ES6 there were some major changes, but some of them were just syntactic changes intended for developers to write less number of lines of code. Rest and spread is one of them.

This one line can probably make your concept clear in very simple language -
**`Rest` is used to gather elements together**

**Rest Parameters** is a very good way to handle function parameters when the number of arguements are unknown. It allows us to collect various functional arguments together in an array.

## Syntax

Syntax is super easy, while defining the function, instead of specifying different arguments, just write 3 dots followed by a single argument name.

That single argument  will be an array which will contain all the arguments that are passed  inside the function call

```js
function functionName (...parameters) {
    // all the arguments are collected
    // inside the parameters array
    // arg1 = parameters[0]
    // arg2 = parameters[1]
    ...
    ...
}

functionName (arg1, arg2, arg3, arg4)
```

## [Let's look at a simple example](./1.js)

This is probably the example everyone take, while explaining the concept of rest parameters, and it explains the concept well, so let's have a look.

**Write a function which returns the sum of its arguments given that you don't know the number of arguments**

You know the syntax, so try this out yourself then see the answer.

## [Solution to previous problem](./1.js)

```js
/**
 * Write a function which returns the sum of its arguments 
 * given that you don't know the number of arguments
 */

// Using normal for loop
function argSum1 (...args) {
    let sum = 0;
    for (let i=0; i<args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log ('argSum1 (1, 2, 3, 4, 5):  ', argSum1 (1, 2, 3, 4, 5)); // 15
console.log ('argSum1 (10, 20, 30, 40):', argSum1 (10, 20, 30, 40)); // 100

// Using forEach
function argSum2 (...args) {
    let sum = 0;
    args.forEach (arg => sum += arg);
    return sum;
}
console.log ('argSum2 (1, 2, 3, 4, 5):  ', argSum2 (1, 2, 3, 4, 5)); // 15
console.log ('argSum2 (10, 20, 30, 40):', argSum2 (10, 20, 30, 40)); // 100

// One Liner - reduce()
const argSum3 = (...args) => args.reduce ((sum, arg) => sum+arg, 0);
console.log ('argSum3 (1, 2, 3, 4, 5):  ', argSum3 (1, 2, 3, 4, 5)); // 15
console.log ('argSum3 (10, 20, 30, 40):', argSum3 (10, 20, 30, 40)); // 100
```

## [Example 2](./2.js)

**Write a function that takes in the name of a student and his marks and returns a grade statement**

```js
function gradeStatement (name, ...marks) {
    // Number of subjects
    const numOfSubjects = marks.length;

    // Sum of marks
    const sum = marks.reduce ((total, mark) => total+mark, 0);

    // Average of marks
    const average = sum/numOfSubjects;

    let grade;
    if (average >= 90)  grade = 'S';
    else if (average >= 80) grade = 'A';
    else if (average >= 70) grade = 'B';
    else if (average >= 60) grade = 'C';
    else    grade = 'F';

    return `The student ${name} has the grade - ${grade}`;
}

console.log (gradeStatement("John", 90, 95, 98, 82));
console.log (gradeStatement("Amanda", 61, 82, 99));
```

That's it for today, feel free to add more questions, open a Pull Request.

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>