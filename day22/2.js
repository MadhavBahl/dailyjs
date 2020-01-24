/**
 * ES6 Classes
 * Make a class "Person" with a greet method
 */

// Constructor function - pre ES6
function Person ({ name, age, occupation }) {
    this.name = name;
    this.age = age;
    this.occupation = occupation; 
}

// Adding methods to "Person"
Person.prototype.greet = function () {
    return `Hi! I am ${this.name}.
        I am of  ${this.age} years old.
        I am a ${this.occupation}`;
}

const person = new Person ({ name: "John", age: 21, occupation: "Student" });
console.log (person.greet());