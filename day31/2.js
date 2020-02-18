/**
 * Dates in JS
 * Getter 2: getMonth()
 */

// Making a new date object
const currentDate = new Date();

// Let's get the current month
const month = currentDate.getMonth();

// Take an array of months
const months = [ 'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug', 'Sept', 
        'Oct', 'Nov', 'Dec' ];
// Print 
console.log (`Current month is: ${months[month]}`);