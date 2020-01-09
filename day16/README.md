# Day 16: Destructuring Part 3

![Cover](./cover.png)

Welcome back to the day 16, and the 3rd day of discussing destructuring.

In the previous days, we discussed about how to extract properties out of an object using destructuring and how to apply destructuring in function arguments.

As you might have guessed, today we are going to discuss about destructuring the elements out of an array.

Yes, you heard it right, not only can we extract the properties out of objects, but we can also extract elements out of arrays (and as we will see further, using destructuring, we can extract out almost any element even in the most complex and nested object).

## Day 3. Pulling values out of arrays

So today's topic is going to be how to extract elements out of an array using destructuring instead of array elements.

### [Syntax](./1.js)

Let's first have a look at the syntax then we will see a little example.

**Syntax:**

```js
var myArr = [ 10, 20, 30, 40, 50 ];

var [ ele1, ele2, ele3, ele4, ele5 ] = myArr;
```

ele1 to ele5 will be initialized with values according to the index of `myArr`. Alright, pretty easy, correct?

Now you must be thinking,

> Wait Madhav, what if I give more than `ele5` in while destructuring? There are only 5 elements, what will happen then?

Pretty genuine doubt, and I like it. Nothing will happen, the value of excess variables will be `undefined`.

Now let's see some examples.

## [Example 1](./2.js)

**Given an array having 3 elements, which are the values of red, green and blue of an rgb color code. Extract those values into different variables.**

Pretty easy, yes. Let's see how to do this without destructuring first.

```js
var rgb = [ 254, 135, 97 ];

var red = rgb[0];
var green = rgb[1];
var blue = rgb[2];

console.log (`Red: ${red} | Green: ${green} | Blue: ${blue}`);
```

Now again, you might be thinking, what's the problem with this?

To be honest, there is no problem with this syntax. But then again, as we can see, we have to write 3 separate lines to extract out those elements and with destructuring, we can reduce it to a single line.

```js
var rgb = [ 254, 135, 97 ];

var [ red, green, blue ] = rgb;

console.log (`Red: ${red} | Green: ${green} | Blue: ${blue}`);
```

As you can see, this reduced the 3 lines where we extracted the elements into 1. Now let's see another example.

## [Example 2](./3.js)

**Given an array of student names, extract out the elements into different variabes, then write a function which adds a given student as the first element**

Let's do this without destructuring first.

```js
var students = [
    'Casper',
    'Amanda',
    'Kepler'
];

// Without destructuring
var student1 = students[0];
var student2 = students[1];
var student3 = students[2];

console.log (`
    Student 1: ${student1}
    Student 2: ${student2}
    Student 3: ${student3}
`);

function addStudent1 (studName, studArr) {
    // Note* this can be done using the `splice` method also,
    // But I'll do this the long way :)
    var newStudArr = [ studArr[0], studName ];
    for (let i=1; i<studArr.length; i++) {
        newStudArr.push (studArr[i]);
    }
    return newStudArr;
}
console.log ("New Student Array: ", addStudent1 ("John", students));
```

As you can see, it's too much code. Let's see how it goes using features like rest and destructuring.

## [Solution to the student name problem using destructuring](./3.js)

**Given an array of student names, extract out the elements into different variabes, then write a function which adds a given student as the first element**

```js
var students1 = [
    'Casper',
    'Amanda',
    'Kepler'
];

var [ stud1, stud2, stud3 ] = students1;

console.log (`stud1: ${stud1} | stud2: ${stud2} | stud3: ${stud3}`);

function addStudent2 (studName, studArr) {
    return [ studName, ...studArr ];
}
console.log ("New Student Array: ", addStudent2 ("Rocky", students1));
```

So, that's it for today, I hope you understood the concept. See you tomorrow!

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>