# Day 17: Destructuring Part 4

![cover](./cover.png)

Welcome back to DailyJS, as you know these days we are discussing various use cases of the concept of destructuring in JavaScript.

Till now we have discussed how to extract properties out of objects and elements out of arrays using destructuring.

As I mentioned yesterday, destructuring works even on the complex and nested objects, and we will start looking at those use cases from today. Hope you find it useful :)

Today we are going to look how to pull out an object property if the object itself is an array element.

## 4. To pull out a property inside an object which is inside an array

Let's see how to do this by taking forward the yesterday's example!

**Given the list of student information, extract the name and dob of first student**

Let's try this without using destructuring.

```js
const students = [
    { name: 'John', dob: '10-Jun-1992', average: 94 },
    { name: 'Kepler', dob: '21-May-1993', average: 91 },
    { name: 'Amanda', dob: '01-Jan-1992', average: 87 },
    { name: 'Tristen', dob: '11-Dec-1991', average: 84 }
];

// ES5
const name = students[0].name;
const dob = students[0].dob;

console.log (`Name: ${name1} | DOB: ${dob1}`);
```

Again, as you can see, there is no problem with this syntax, it's completely your choice as to which way you choose to solve this. Now let's look at the ES6 Solution

## [Solution to the students problem using destructuring](./1.js)

**Question:** Given the list of student information, extract the name and dob of first student.

To be honest, long long back when I was exploring the ES6 features I tried doing this same thing myself and it worked in the first attempt. 

I just knew the normal syntax of how to destructure from array and objects, and I applied some thinking and did it. So I just want to say that if I (as a beginner) could do it, you can to. Try it out yourself and then see the answer.

```js
const students = [
    { name: 'John', dob: '10-Jun-1992', average: 94 },
    { name: 'Kepler', dob: '21-May-1993', average: 91 },
    { name: 'Amanda', dob: '01-Jan-1992', average: 87 },
    { name: 'Tristen', dob: '11-Dec-1991', average: 84 }
];

// ES6 Destructuring
const [ {name, dob } ] = students;

console.log (`Name: ${name} | DOB: ${dob}`);
```

That's it, I hope you were able to figure it out. See you tomorrow!

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>