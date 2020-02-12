# Day 30: Dates in JS - Part 1

Hello and welcome back to the 30th day of DailyJS, and our topic for this week would be `Dates in JS`.

Today we will discuss how can we create the Date objects in JS, and from tomorrow we will see various methods in the Date Object.

> JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC. (source: [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date))

The time - 00:00:00 UTC on 1 January 1970 - is also called as the UNIX epoch, and unix time is the number of seconds that have elapsed since that time.

Let's take a look at the various ways of creating the Date Objects

## Creating the Date Object

We use the `Date()` constructor to create a new Date object.

There are 4 ways to do so: (source: [W3Schools](https://www.w3schools.com/js/js_dates.asp))

1. new Date ()
2. new Date (year, month, day, hours, minutes, seconds, milliseconds)
3. new Date (miliseconds)
4. new Date (date string)

Let's have a look at each one of them

## [Method #1](./1.js)

The first method is to use the Date constructor as it is, without any arguments.
By doing so, we create a new date object having the present time and date.

```js
new Date();
```

**Example**

```js
/**
 * Dates in JS
 * Creating a Date Object
 */

const currentDate = Date ();
console.log ("Current date and Time is: ");
console.log (currentDate);

// Output: 
// Current Date and Time is: 
// Wed Feb 12 2020 16:09:43 GMT+0530 (India Standard Time)
```

## [Method #2](./2.js)

Using this method, we can create a new Date object with the given date and time.

The arguments are - year, month, day, hours, minutes, seconds, milliseconds.

But there is no need to provide all the arguments, we can use "1 to 7" number of arguments

```js
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```

## [Method #2 - Sample](./2.js)

```js
// 1. With all 7 arguments
// year, month, day, hour, minute, second, and millisecond
var d7 = new Date (2020, 1, 12, 16, 20, 00, 00);

// 2. With 6 arguments
// year, month, day, hour, minute, second
var d6 = new Date (2020, 1, 12, 16, 20, 00);

// 3. With 5 arguments
// year, month, day, hour, and minute
var d5 = new Date (2020, 1, 12, 16, 20);

// 4. With 4 arguments
// year, month, day, and hour
var d4 = new Date (2020, 1, 12, 16);

// 5. With 3 arguments
// year, month, and day
var d3 = new Date (2020, 1, 12);

// 6. With 2 arguments
// year and month
var d2 = new Date (2020, 1);

// 7. With 1 argument
// With only one argument, it will be taken as milliseconds since the Epoch time
var d1 = new Date (1581514183500);
// Also, you can see that the third method is same as this method with 1 argument
```

## [Method #3](./3.js)

This method is same as the previous method with a single argument.

```js
new Date(milliseconds)
```

Let's see an example -

```js
/**
 * Dates in JS
 * Creating a Date Object - Method 3
 */

// Syntax - new Date (miliseconds)
var date = new Date (1581514183500);
console.log (date);
```

## [Method #4](./4.js)

We can create a new date object by providing the date as a string.

```js
new Date (date-string);
```

Let's see an example - 

```js
/**
 * Dates in JS
 * Creating a Date Object - Method 4
 */

const date1 = new Date ('February 12, 2020 16:20:00');
const date2 = new Date ('2020-02-12T16:20:00');

console.log (date1);
console.log (date2);
```

That's it for today.