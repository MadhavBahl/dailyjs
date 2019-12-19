/**
 * Extract the names of students in an array 
 * from student information list
 */

const students = [
    { name: 'Amanda', age: 32 },
    { name: 'Kepler', age: 20 },
    { name: 'Stan', age: 25 },
    { name: 'John', age: 16 },
    { name: 'Matt', age: 20 },
    { name: 'Dan', age: 17 }
];

const studentNames = students.reduce ((names, student) => {
    names.push (student.name);
    return names;
}, []);

console.log ("Student names: ", studentNames);