/**
 * Dates in JS
 * getHours() and getMinutes() 
 */

// Make a new date object
const currentDate = new Date ();

// Let's get the current hour and minute
const hour = currentDate.getHours ();
const minute = currentDate.getMinutes ();

// Print
console.log (`The time is: ${hour}:${minute}`);