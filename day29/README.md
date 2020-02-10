# Day 29: WeakSet

![cover](./cover.png)

Hello and welcome back to the 29th day of DailyJS. Today's topic is `WeakSet`.

> WeakSet objects are collections of objects. An object in the WeakSet may occur only once; it is unique in the WeakSet's collection.

Alright, you must be confused about what's the difference between Set and WeakSet?

In layman terms, there is one simple difference, a WeakSet is a coollection of objects only.

## Syntax

Just like the Map, WeakMap and Set, a `WeakSet` is also initialized through a constructor.

```js
let ws = new WeakSet ();
```

Some important methods - 

1. add(value)
2. delete(value)
3. has(value)

## [Example](./1.js)

```js
let classRoom = new WeakSet ();

const stud1 = { name: "John" };
const stud2 = { name: "Amanda" };
const stud3 = { name: "Kepler" };

// Add
classRoom.add (stud1);
classRoom.add (stud2);
classRoom.add (stud3);

// Delete
classRoom.delete (stud3);

// has
console.log ("Has stud1?", classRoom.has (stud1));
console.log ("Has stud2?", classRoom.has (stud2));
console.log ("Has stud3?", classRoom.has (stud3));
```