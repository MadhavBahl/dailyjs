/**
 * Array Destructuring
 * Given an array of student names, 
 * extract out the elements into different variabes, 
 * then write a function which a given student as the first element
 */

// Without destructuring
var students = [
    'Casper',
    'Amanda',
    'Kepler'
];

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
    var newStudArr = [ studName ];
    for (let i=0; i<studArr.length; i++) {
        newStudArr.push (studArr[i]);
    }
    return newStudArr;
}
console.log ("New Student Array: ", addStudent1 ("John", students));

// With destructuring
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
