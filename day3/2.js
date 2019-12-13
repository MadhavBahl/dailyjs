/**
 * Given an array of objects having the data of students, 
 * find the student having register number 9018
 */

const students = [
    { regNo: 0192, name: "Madhav" },
    { regNo: 1302, name: "Ram" },
    { regNo: 6723, name: "Rahul" },
    { regNo: 9018, name: "John" },
    { regNo: 4211, name: "Taylor" },
];

let wantedStudent = students.find (student => student.regNo === 9018);

console.log (wantedStudent);