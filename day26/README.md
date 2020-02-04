# Day 26: Maps

![cover](./cover.png)

Welcome back to the day 26th of DailyJS, I know I was a little inconsistent in putting up the content from past few days, I will try to be more consistent from now :D

Today's topic is map, which is, again, a very simple topic.

If you come from some other language you must have heard about some data structures that are capable of holding key value pairs. For example, python has `dictionary`.

Similarly, Map is a collection of elements where each element is stored as a Key, value pair.

## [Syntax](./1.js)

The syntax is very simple, we can provide an iterable object in the constructor. We can even use the `get` and `set` methods to retrieve and set the key values.

```js
new Map([itr])

var myMap = new Map([['a', 1], ['b', 2] ,['c', 3]]);
```

Some important methods - 

1. Map.prototype.set () - `myMap.set (key, val)`
2. Map.prototype.get () - `myMap.get (key)`
3. Map.prototype.has () - `myMap.has (key)`
4. Map.prototype.delete () - `myMap.delete (key)`
5. Map.prototype.clear () - `myMap.clear ()`
6. Map.prototype.keys () - `myMap.keys ()`
7. Map.prototype.values () - `myMap.values ()`

## [Example] (./1.js)

```js
/**
 * Map in JS
 */

var myMap = new Map([['a', 1], ['b', 2] ,['c', 3]]);
console.log (myMap);
console.log ("'a' -> ", myMap.get ('a'));

// Delete all key value pairs
myMap.clear ();
console.log (myMap);

// Adding new pairs
myMap.set ('name', 'Madhav');
myMap.set ('age', 21);
myMap.set ('profession', 'Student');
myMap.set ('remarks', 'Good Boi');
console.log (myMap);

// Get the value from key
const name = myMap.get ('name');
console.log (name);

// Check a key
const hasAge = myMap.has ('age');
console.log ('myMap has age: ', hasAge);

// Delete a pair
myMap.delete ('remarks');
console.log (myMap);
```

That's it for today, see you tomorrow!