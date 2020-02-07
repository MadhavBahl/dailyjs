/**
 * WeakMap in JS
 */

var weakMap = new WeakMap ();

// weakMap.set ("a", 1); - ERROR!

// Set
var myObj = {};
weakMap.set (myObj, 'My Object');
console.log (weakMap);

// Get
var val = weakMap.get (myObj);
console.log ("Value is: ", val);

// Has
console.log ("Has myObj?", weakMap.has (myObj));

// Delete
weakMap.delete (myObj);