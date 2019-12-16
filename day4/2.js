/**
 * Extract the information of students 
 * from an array having information about people
 */

var people = [
    { name: 'John', isStudent: false },
    { name: 'Mark', isStudent: true },
    { name: 'Kepler', isStudent: false },
    { name: 'Stan', isStudent: true },
    { name: 'Ben', isStudent: true },
];

let students = [];

// Without filter helper
for (let i=0; i<people.length; i++) {
    if (people[i].isStudent)    students.push(people[i]);
}
console.log ('Students1: ', students);

// With filter without arrow fn
let students3 = people.filter(function (person) {
    return person.isStudent;
})
console.log ('Students2: ', students2);

// With filter with arrow fn
let students3 = people.filter(person => person.isStudent)
console.log ('Students3: ', students3);
