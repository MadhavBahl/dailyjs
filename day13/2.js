/**
 * Duplicate the given array
 */

let arr1 = [ 1, 2, 3 ];

// Let's try to assign arr2 directly 
let arr2 = arr1;
console.log ("/* ==== Before Modifying Arr1 ==== */");
console.log ("Arr1: ", arr1); // [1, 2, 3]
console.log ("Arr2: ", arr2); // [1, 2, 3]

// What's the problem?
// Try to modify arr1 now
arr1.push (4);
console.log ("/* ==== After Modifying Arr1 ==== */");
console.log ("Arr1: ", arr1); // [1, 2, 3, 4]
console.log ("Arr2: ", arr2); // [1, 2, 3, 4]

// What exactly happened here?
// Since arr2 was a referance to the value of arr1, arr2 also got changed
// In real projects, we might not want the value of other array to change.
// So here's one of the possible solutions

let  arr3 = [ ...arr1 ];
// Here, the spread operator takes out the elements from array 1,
// And then we form a new array out of those values
console.log ("/* ==== Before Modifying Arr1 ==== */");
console.log ("Arr1: ", arr1); // [1, 2, 3, 4]
console.log ("Arr2: ", arr2); // [1, 2, 3, 4]
console.log ("Arr3: ", arr3); // [1, 2, 3, 4]

// Now let's try to modify things again
arr1.push (5);
console.log ("/* ==== After Modifying Arr1 ==== */");
console.log ("Arr1: ", arr1); // [1, 2, 3, 4, 5]
console.log ("Arr2: ", arr2); // [1, 2, 3, 4, 5]
console.log ("Arr3: ", arr3); // [1, 2, 3, 4]
// As you can noticed, arr3 did not change with arr1, which solves our proble,