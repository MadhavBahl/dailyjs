/**
 * JS Class
 * Make a class "Person" with a greet method, Make another class "Student" that extends the "Person" class
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

class Student extends Person {
    constructor (options) {
        super (options);
        this.marks = options.marks;
    }

    grades () {
        if (this.marks > 90)    return 'A';
        else if (this.marks > 80) return 'B';
        else if (this.marks > 70) return 'C';
        else if (this.marks > 60) return 'D';
        else if (this.marks > 50) return 'E';
        else    return 'F';
    }
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
