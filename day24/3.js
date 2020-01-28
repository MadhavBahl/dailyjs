/**
 * For..Of Loop
 * Iterating over a Map
 */

const myMap = new Map ([['a', 1], ['b', 2]]);

for (const [key, val] of myMap) {
    console.log ('Key: ', key);
    console.log ('Val: ', val);
}