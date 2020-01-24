/**
 * ES6 Classes
 * Make a class "Person" with a greet method
 */

class Person {
    constructor ({ name, age, occupation }) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    greet () {
        return `Hi! I am ${this.name}.
            I am of  ${this.age} years old.
            I am a ${this.occupation}`;
    }
}

const person = new Person ({ name: "John", age: 21, occupation: "Student" });
console.log (person.greet());