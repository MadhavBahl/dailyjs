// const double = number => 2*number;
// console.log (double(4));

// // Double the array
// const doubleArr = arr => arr.map (num => num*2);
// console.log (doubleArr ([1, 2, 3, 4]));

// When to use arrow?
// Will show undefined for teamName
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad', 
    teamSummary: function () {
        return this.members.map (function (member) {
            return `${member} is in ${this.teamName}`;
        });
    }
}
console.log (team.teamSummary());

// Method 1, .bind(this)
const team1 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad', 
    teamSummary: function () {
        return this.members.map (function (member) {
            return `${member} is in ${this.teamName}`;
        }.bind (this));
    }
}
console.log (team1.teamSummary());

// Method 2, cache this
const team2 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad', 
    teamSummary: function () {
        const self = this;
        return this.members.map (function (member) {
            return `${member} is in ${self.teamName}`;
        });
    }
}
console.log (team2.teamSummary());

// Method 3, using arrow function
const team3 = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad', 
    teamSummary: function () {
        return this.members.map (member => {
            return `${member} is in ${this.teamName}`;
        });
    }
}
console.log (team3.teamSummary());