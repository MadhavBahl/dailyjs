/**
 * Destructuring Arrays and Objects at the same time
 * To pull out a property inside an object which is inside an array
 * Given the list of student information, extract the name and dob of first student
 */

const students = [
    { name: 'John', dob: '10-Jun-1992', average: 94 },
    { name: 'Kepler', dob: '21-May-1993', average: 91 },
    { name: 'Amanda', dob: '01-Jan-1992', average: 87 },
    { name: 'Tristen', dob: '11-Dec-1991', average: 84 }
]

// ES5
const name1 = students[0].name;
const dob1 = students[0].dob;

console.log (`Name: ${name1} | DOB: ${dob1}`);

// ES6 Destructuring
const [ {name, dob } ] = students;

console.log (`Name: ${name} | DOB: ${dob}`);