/**
 * var is not block scoped
 * let and const are block scoped
 */

// #1: var
var animal1 = "dog";
if (animal1 === "dog") {
    var animal1 = "cat";
}
console.log (animal1); // cat "Ohh no!"

// #2: let
let animal2 = "dog";
if (animal2 === "dog") {
    let animal2 = "cat";
}
console.log (animal2); // dog "Perfect :)"

// #3 const 
const animal3 = "dog";
if (animal3 === "dog") {
    const animal3 = "cat";
}
console.log (animal3); // dog "Perfect :)";