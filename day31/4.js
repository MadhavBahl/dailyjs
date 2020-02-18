/**
 * Dates in JS
 */

// Making a new date object
const currentDate = new Date();

// Let's get the year, month and date
const year = currentDate.getFullYear ();
const month = currentDate.getMonth ();
const date = currentDate.getDate ();

// Take an array of months
const months = [ 'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug', 'Sept', 
        'Oct', 'Nov', 'Dec' ];

// Print 
console.log (`Today is ${date} ${months[month]}, ${year}`);