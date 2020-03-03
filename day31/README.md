# Day 31: Dates in JS - Part 2: Get Methods

Hello and welcome back to the 31st Day of the DailyJS initiative, as we discussed the last day that our topic for this week will be `Dates in JS`, today we will start discussing about the instance methods of the Date object.

In JavaScript, there are many instance methods available for Dates, which can be broadly classified into `Get` and `Set` methods.

When I say there are  many of them, I am not exaggerating, there are many of them, but in our Dates series, we will try to discuss some important ones.

Today we will have a look at

1. getFullYear()
2. getMonth()
3. getDate()

## [1. getFullYear()](./1.js)

As the name suggests, this method gives us the "year" as a 4 digit number (YYYY)

Let's see it in action.

```js
// Making a new date object
const currentDate = new Date();

// Let's get the current year
const year = currentDate.getFullYear();

// Print 
console.log (`Current year is: ${year}`);
```

## [2. getMonth()](./2.js)

This method gives us the month as a number in the range 0 to 11. 

0 for January,
11 for December.

Let's see it in action

```js
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
```

## [3. getDate()](./3.js)

This method gives us the day of the month - 1 to 31

Let's see it in action!

```js
// Making a new date object
const currentDate = new Date();

// Let's get the current date
const date = currentDate.getDate();

// Print 
console.log (`Today is ${date}`);
```

## Let's combine them!

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

That's it for today, see  you tomorrow!