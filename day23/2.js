/**
 * JS Prototype inheritance
 * Make a class "Person" with a greet method, Make another class "Student" that extends the "Person" class
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

function Student (options) {
    Person.call (this, options);
    this.marks = options.marks;
}

Student.prototype = Object.create (Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.grades = function () {
    if (this.marks > 90)    return 'A';
    else if (this.marks > 80) return 'B';
    else if (this.marks > 70) return 'C';
    else if (this.marks > 60) return 'D';
    else if (this.marks > 50) return 'E';
    else    return 'F';
}

const john = new Student ({
    name: 'John',
    age: 20,
    occupation: 'Student',
    marks: 95
});

console.log ('----------');
console.log (john);
console.log (john.greet ());
console.log ("Grade - ", john.grades ());
