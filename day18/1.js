/**
 * Destructuring
 * Pulling out an array element 
 * which is inside a property of an object
 * Given the details of a student in an object, 
 * extract out his marks in physics, chemistry and maths
 */

var student = {
    name: 'John',
    age: 17,
    marks: [95, 91, 89] // [ P, C, M ]
};

// To exract the marks in PCM
var phy = student.marks[0];
var chem = student.marks[1];
var mat = student.marks[2];

console.log (`P: ${phy} | C: ${chem} | M: ${mat}`);

// Using destructuring
const { marks: [physics, chemistry, maths] } = student;
console.log (`P: ${physics} | C: ${chemistry} | M: ${maths}`);