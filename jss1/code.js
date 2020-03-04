/**
 * Dates in JS
 * Get Methods
 */

const currentDate = new Date ();

const hour = currentDate.getHours();
const mins = currentDate.getMinutes();
const secs = currentDate.getSeconds();

console.log (`Current Time Is -
    ${hour} hours,
    ${mins} minutes,
    ${secs} seconds.
`);