/**
 * const let example
 */

const name = "Madhav";
let profession = "Student";
let age = 21;

console.log ("Name: ", name);
console.log ("Profession: ", profession);
console.log ("Age: ", age);

// Let's say 1 year passed and his profession changed
// We can reassign 
//  name = "Madhav new"; -> This will give an error
profession = "Software Engineer";
age = 22;

console.log ("/* ===== After a year ===== */");console.log ("Name: ", name);
console.log ("Profession: ", profession);
console.log ("Age: ", age);