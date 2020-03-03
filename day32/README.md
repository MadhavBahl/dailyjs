# Day 32: Dates in JS - Part 3: Get Methods

Hello and welcome back to the 32nd Day of the DailyJS initiative, as we discussed the last day that our topic for a few days will revolve around dates in JS (Since it's too huge a topic to be comevered in 1 day).

Today we will discuss about more "Get methods"

Let's have a look at these today -

1. getHours ()
2. getMinutes ()

## [1. getHours()](./1.js)

This method will return the hours as a number lying between 0 and 23 (both inclusive)

Let's see it in action!

```js
// Make a new date object
const currentDate = new Date ();

// Let's get the current hour
const hour = currentDate.getHours ();

// Print
console.log (`The time is around ${hour} hours`);
```

## [2. getMinutes()](./2.js)

This method will return the minutes as a number lying between 0 and 59 (both inclusive)

Let's see it in action!

```js
// Make a new date object
const currentDate = new Date ();

// Let's get the current hour and minute
const hour = currentDate.getHours ();
const minute = currentDate.getMinutes ();

// Print
console.log (`The time is: ${hour}:${minute}`);
```

That's it for today, see you tomorrow!
