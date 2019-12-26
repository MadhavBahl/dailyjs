/**
 * Template Literals.
 * Injecting variables into strings
 */

let name = "Madhav";
let nickname = "Lean Programmer";
let age = 21;
let profession = "Student";

// Without template literals
const greetings1 = (name, nickname, age, profession) => {
    return "Hi. I am " + name + ". People call me " + nickname + ". I am " + age + " years old. I am a " + profession;
}
console.log (greetings1 (name, nickname, age, profession));

// Using template literals
const greetings2 = (name, nickname, age, profession) => {
    return `Hi. I am ${name}. People call me ${nickname}. I am ${age} years. I am a ${profession}`;
}
console.log (greetings2 (name, nickname, age, profession));