/**
 * Destructuring
 * Complext Objects
 * Pull out the marks in phy, chem and mat of the first student in the list of student objects
 */

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


