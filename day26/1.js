/**
 * Map in JS
 */

var myMap = new Map([['a', 1], ['b', 2] ,['c', 3]]);
console.log (myMap);
console.log ("'a' -> ", myMap.get ('a'));

// Delete all key value pairs
myMap.clear ();
console.log (myMap);

// Adding new pairs
myMap.set ('name', 'Madhav');
myMap.set ('age', 21);
myMap.set ('profession', 'Student');
myMap.set ('remarks', 'Good Boi');
console.log (myMap);

// Get the value from key
const name = myMap.get ('name');
console.log (name);

// Check a key
const hasAge = myMap.has ('age');
console.log ('myMap has age: ', hasAge);

// Delete a pair
myMap.delete ('remarks');
console.log (myMap);