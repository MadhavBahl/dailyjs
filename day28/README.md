# Day 28: Sets

![cover](./cover.png)

Hello and welcome back to the 28th day of DailyJS. Today's topic is `Set`.

If you are coming from Python language, you might be familiar with the concept of sets.

> Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

In layman terms, a set can be seen as a collection of elements where each element is unique.

## Syntax

Similar to `Map`, Set is also initialized through a constructor.

```js
var mySet = new Set();
```

Some important methods -

1. Set.prototype.add(element)
2. Set.prototype.delete(element)
3. Set.prototype.clear()
4. Set.prototype.has(element)
5. Set.prototype.entries()

## [Example](./1.js)

```js
/**
 * Set in JS
 */

var students = new Set (["John", "Kepler", "Amanda"]);
console.log (students);

// Add
students.add ("Ronaldo");
students.add ("Johny");
students.add ("John"); // Won't be added
console.log (students);

// Delete
students.delete ("Johny");
console.log (students);

// Clear
students.clear ();
console.log (students); // Empty set

// Add some values
students.add ("Ronaldo");
students.add ("Johny");
students.add ("John");

// Entries
var entries = students.entries ();
console.log (entries);

// Has
console.log ("Has John?", students.has ("John"));
```