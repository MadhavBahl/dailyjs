# Day 11: Enhanced Object Literals

![Enhanced Object Literals](./cover.png)

Enhanced Object Literals are very simple to understand but very useful, if you are a JavaScript developer, you'll find yourself using it so many times, and after a while you'll get habitual of this syntax rather than the normal object literals.

Introduced in ES6, enhanced object literals falls in the category of syntactic changes in the language. (or as we call it, the syntactic sugar)

Enhanced Object Literals are all about writing object literals in a more compact fashion.

It allows a shorthand syntax for

1. initializing object properties from variables
2. defining function as a value inside an object

## 1. Reducing the key and value with same name

If we have to set the value of a property of object from a variable, and the name of property is same as the name of variable, we can just write the variable name instead of the general `property: variable` syntax.

**Syntax**

```js
{ variableName }

// Example
let greetings = "Hello Worlds";
let myObj = { greetings };
```

## [Let's see an example](./1.js)

**Before ES6**

```js
var name = "Madhav";
var age = 21;

var studentDetails = {
    name: name,
    age: age
}
```

**With ES6 Enhanced Object Literals**

```js
let name = "Madhav";
let age = 21;

// No need for `name: name` and `age: age`
let studentDetails = { name, age }; 
```

## 2. Reducing the key having a function as value

Before this update, whenever we had to use function expression inside an object literal we had to write the property (method) name followed by colon, followed by the function definition.

Now we can directly write the function definition without the function keyword and the colon.

Yes, I know, you might be thinking, what's the big deal? So yes, as I told you, this ES6 update was just a syntactic sugar.

**Syntax**

```js
let myObj = {
    funcName () {
        ...
        ...
    }
}
```

## [Let's see an example](./2.js)

**Write an object that contains the marks of a particular student, write a function to calculate the percentage score**

**Before ES6**

```js
var physics = 98;
var maths = 95;
var chem = 89;

var studentInfo = {
    physics: physics,
    maths: maths,
    chem: chem,
    calcScore: function () {
        return (this.physics + this.maths + this.chem)/3
    }
}
```

**With ES6 Enhanced Object Literals**

```js
const physics = 98;
const maths = 95;
const chem = 89;

const studentInfo = {
    physics,
    maths,
    chem,
    calcScore () {
        return (this.physics + this.maths + this.chem)/3
    }
}
```

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>