/**
 * Dates in JS
 * Creating a Date Object - Method 2
 */

// 1. With all 7 arguments
// year, month, day, hour, minute, second, and millisecond
var d7 = new Date (2020, 1, 12, 16, 20, 00, 00);
console.log (d7);

// 2. With 6 arguments
// year, month, day, hour, minute, second
var d6 = new Date (2020, 1, 12, 16, 20, 00);
console.log (d6);

// 3. With 5 arguments
// year, month, day, hour, and minute
var d5 = new Date (2020, 1, 12, 16, 20);
console.log (d5);

// 4. With 4 arguments
// year, month, day, and hour
var d4 = new Date (2020, 1, 12, 16);
console.log (d4);

// 5. With 3 arguments
// year, month, and day
var d3 = new Date (2020, 1, 12);
console.log (d3);

// 6. With 2 arguments
// year and month
var d2 = new Date (2020, 1);
console.log (d2);

// 7. With 1 argument
// With only one argument, it will be taken as milliseconds since the Epoch time
var d1 = new Date (1581514183500);
console.log (d1);
// Also, you can see that the third method is same as this method with 1 argument