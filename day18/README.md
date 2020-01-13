# Day 18: Destructuring Part 5

![cover](./cover.png)

Welcome back to DailyJS, as you know these days we are discussing various use cases of the concept of destructuring in JavaScript.

On the previous day we discussed how can we pull out a property inside an object which is inside an array.

Today we will look at the opposite, how to extract out an array element which is inside an object property.

## 5. To pull out an array element which is inside a property of an object

To see this, we will look at  a simple example

**Given the details of a student in an object, extract out his marks in physics, chemistry and maths**

Let's solve this problem without destructuring first!


```js
var student = {
    name: 'John',
    age: 17,
    marks: [95, 91, 89] // [ P, C, M ]
};

var phy = student.marks[0];
var chem = student.marks[1];
var mat = student.marks[2];

console.log (`P: ${phy} | C: ${chem} | M: ${mat}`);
```

Again, we are writing `student.marks` 3 times, let's have a look at the solution through destructuring

## [Solution using destructuring](./1.js)

```js
var student = {
    name: 'John',
    age: 17,
    marks: [95, 91, 89] // [ P, C, M ]
};

const { marks: [physics, chemistry, maths] } = student;
console.log (`P: ${physics} | C: ${chemistry} | M: ${maths}`);
```

As you can see, we reduced the 3 lines of extraction to a single line.

That's it for today, see you tomorrow.

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>