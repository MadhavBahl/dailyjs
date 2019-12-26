# Day 10: Template Strings or Template Literals

![Template Literals](./cover.png)

Today's concept is very simple, and the one which you are going to use a lot, The Template Strings.

The main concept is that using template strings (or, template literals), we can insert JavaScript expressions inside our normal strings.

## But why do we need them?

Generally when we have to concatenate different strings, or get the data from a variable or a functions and use it to display some data, we either use `+` to join different strings or we use the string conocat method.

Let's have a look at how will it look if we want to get the data fromo 4 different variables and use them to display the information on the screen.

```js
let name = "Madhav";
let nickname = "Lean Programmer";
let age = 21;
let profession = "Student";

const greetings = "Hi. I am " + name + ". People call me " + nickname + ". I am " + age + " years old. I am a " + profession;

console.log (greetings);
```

You can already see how bad it looks, the expression in which we declare the greetings variable, there are so many `+` symbols.

Template literals deal with this problem quite efficiently by allowing us to inject the expressions inside the string itself. For Example - 

```js
let name = "Madhav";
console.log (`Hi. I am ${name}`);
```

As you can see, using template literals make it a lot more readable.

## [Let's complete the previous example](./1.js)

**Write a function which takes in the student info and returns a greeting message**

```js
/**
 * Template Literals.
 * Injecting variables into strings
 */

let name = "Madhav";
let nickname = "Lean Programmer";
let age = 21;
let profession = "Student";

// Without template literals
const greetings1 = (name, nickname, age, profession) => {
    return "Hi. I am " + name + ". People call me " + nickname + ". I am " + age + " years old. I am a " + profession;
}
console.log (greetings1 (name, nickname, age, profession));

// Using template literals
const greetings2 = (name, nickname, age, profession) => {
    return `Hi. I am ${name}. People call me ${nickname}. I am ${age} years. I am a ${profession}`;
}
console.log (greetings2 (name, nickname, age, profession));
```

## Syntax

Trust me, if you understood the above example, I don't even need to tell you the syntax. Nevertheless, I'll tel it. So it's pretty simple.

- Start your string using the **backtick (`)** instead of single or double quotes.
- Wherever you wish to inject your expression, put a dollar sign and curly braces `${}`,
- inside the curly braces, insert your variable or expression.
- That's it

Example:

```js
let nativePlace = "India";
console.log (`I am from ${nativePlace}`);
```

## [Let's see another example](./2.js)

This example will help you understand that not only variables, we can also call functions which return some value, inside our template literals.

**Write a function which returns todays date in DD/MM/YYYY format**

```js
/**
 * Template Literals
 * Write a function which returns 
 * todays date in DD/MM/YYYY format
 */

const getFullDate = () => {
    let today = new Date();
    return `Today's Date: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
}

console.log(getFullDate());
```

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>
