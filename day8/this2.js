/**
 * In arrow functions, 
 * `this` keyword always represents the object that defines the arrow function.
 */

// Using Normal Function
const students1 = {
    names: ['Madhav', 'John', 'Amanda'],
    team: "JS Enthusiasts",
    greeting: function () {
        return this.names.map (function (name) {
            return `Member - ${name} - belongs to team - ${this.team}`;
        });
    }
}
/**
 * Output - 
 * [ 'Member - Madhav - belongs to team - undefined',
 *   'Member - John - belongs to team - undefined',
 *   'Member - Amanda - belongs to team - undefined' ]
 */
console.log (students1.greeting ());

// How to fix? .bind(this)
const students2 = {
    names: ['Madhav', 'John', 'Amanda'],
    team: "JS Enthusiasts",
    greeting: function () {
        return this.names.map (function (name) {
            return `Member - ${name} - belongs to team - ${this.team}`;
        }.bind(this));
    }
}
/**
 * Output - 
 * [ 'Member - Madhav - belongs to team - JS Enthusiasts',
 *   'Member - John - belongs to team - JS Enthusiasts',
 *   'Member - Amanda - belongs to team - JS Enthusiasts' ]
 */
console.log (students2.greeting ());

// Using Arrow Function
const students3 = {
    names: ['Madhav', 'John', 'Amanda'],
    team: "JS Enthusiasts",
    greeting: function () {
        // Arrow function inside map()
        return this.names.map ((name) => {
            return `Member - ${name} - belongs to team - ${this.team}`;
        });
    }
}
/**
 * Output - 
 * [ 'Member - Madhav - belongs to team - JS Enthusiasts',
 *   'Member - John - belongs to team - JS Enthusiasts',
 *   'Member - Amanda - belongs to team - JS Enthusiasts' ]
 */
console.log (students3.greeting ());