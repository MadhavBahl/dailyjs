# JS-Snippets Day 1: Date Object Get Methods

Continuing from the DailyJS, we were discussing about the Date object methods, let's have a look at the usage of getHours, getMinutes and getSeconds.

```js
    const currentDate = new Date ();

    const hour = currentDate.getHours();
    const mins = currentDate.getMinutes();
    const secs = currentDate.getSeconds();

    console.log (`Current Time Is -
        ${hour} hours,
        ${mins} minutes,
        ${secs} seconds.
    `);
```