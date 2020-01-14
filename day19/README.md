# Day 19: Destructuring Part 6

![Cover](./cover.png)

Welcome back to the 19th day of DailyJS and (probably) the second last day for seeing the different use cases of destructuring.

Till now we have discussed,

1. Pulling properties out of objects
2. Pulling properties out of objects when they are passed as function arguemnts
3. Pulling values out of arrays
4. To pull out a property inside an object which is inside an array
5. To pull out an array element which is inside a property of an object

And today we are going to look at how can we destructure arrays and objects at the same time, how can we work with the complex objects.

## [6. Working with complex objects: Example 1](./1.js)

Let's extend the same "Students" example we saw yesterday to see how can we destructure complex objects.

**Pull out the marks in phy, chem and mat of the first student in the list of student objects**

Let's do this by both, with and without destructuring.

```js
var students = [
    {
        name: 'John',
        age: 17,
        marks: [95, 91, 89] // [ P, C, M ]
    },
    {
        name: 'Kepler',
        age: 16,
        marks: [88, 92, 81] // [ P, C, M ]
    },
    {
        name: 'Amanda',
        age: 17,
        marks: [70, 98, 89] // [ P, C, M ]
    },
];

// Without Destructuring
var physics = students[0].marks[0];
var chemistry = students[0].marks[1];
var maths = students[0].marks[2];

console.log (`P: ${physics} | C: ${chemistry} | M: ${maths}`);

// With destructuring
const [{ marks: [phy, chem, mat] }] = students;

console.log (`P: ${phy} | C: ${chem} | M: ${mat}`);
```

As you can see, again we converted 3 lines of extraction into only 1

##  [6. Working with complex objects: Example 2](./2.js)

**In the given data structure, find the marks of student in highschool**

```js
var student = {
    name: 'John',
    age: 18,
    marks: [
        {
            highSchoolName: 'St Joseph',
            highSchoolMarks: {
                phy: 95,
                chem: 91,
                mat: 89
            }
        }, {
            secondarySchooolName: 'DPS',
            secondarySchooolMarks: {
                phy: 100,
                chem: 87,
                mat: 98
            }
        }
    ]
};

// Without destructuring
const physics =  student.marks[0].highSchoolMarks.phy;
const chemistry =  student.marks[0].highSchoolMarks.chem;
const maths =  student.marks[0].highSchoolMarks.mat;

console.log (`P: ${physics} | C: ${chemistry} | M: ${maths}`);

// With Destructuring
const { marks: [ { highSchoolMarks: { phy, chem, mat } }] } = student;

console.log (`P: ${phy} | C: ${chem} | M: ${mat}`);
```

In this case (I guess), you can finally notice how significantly the code was reduced using destructuring.

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>