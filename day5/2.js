/**
 * Slots of people are sent for driving license test, 
 * check whether each person in a slot is 18 years or above
 */

const slot1 = [
    { name: 'John', age: 16 },
    { name: 'Matt', age: 20 },
    { name: 'Dan', age: 17 },
];
const slot2 =  [
    { name: 'Amanda', age: 32 },
    { name: 'Kepler', age: 20 },
    { name: 'Stan', age: 25 },
];

// Without arrow functions
function validateSlot (slot) {
    return slot.every (function (person) {
        return person.age >= 18;
    });
}
console.log ("Result 1 \n------------------");
console.log ("Slot 1: ", validateSlot (slot1));
console.log ("Slot 2: ", validateSlot (slot2));
console.log ("------------------");

// With arrow functions
const validateSlot2 = slot => slot.every (person => person.age>=18);
console.log ("Result 2 \n------------------");
console.log ("Slot 1: ", validateSlot2 (slot1));
console.log ("Slot 2: ", validateSlot2 (slot2));