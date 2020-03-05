# JS-Snippets Day 3: Date Object Get Methods

Our previous topic in the Date Object get method included the hours, minutes, and seconds. Very similar to that, we can get the date.

## Code

What did we learn?

- getFullYear ()
- getMonth ()
- getDate ()

```js
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
```