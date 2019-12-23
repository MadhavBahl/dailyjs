/**
 * Arrow Functions don't bind this`
 */

// Normal function
const student1 = {
    name: 'Madhav',
    age: 21,
    greeting: function () {
        console.log (this);
        return `Hi, I am ${this.name} and I am ${this.age} years old`;
    }
}
/**
 * Output should be 
 * "Hi, I am Madhav and I am 21 years old!"
 */
console.log (student1.greeting ());

// Arrow function
const student2 = {
    name: 'Madhav',
    age: 21,
    greeting: () => {
        console.log (this);
        return `Hi, I am ${this.name} and I am ${this.age} years old`;
    }
}
/**
 * Arrow functions don't bind `this`
 * Hi, I am undefined and I am undefined years old
 */
console.log (student2.greeting ());
