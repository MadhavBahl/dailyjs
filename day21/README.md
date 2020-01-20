# Default Function Arguments

![cover](./cover.png)

If you come from another language, you must be aware of this feature called "Default Params" or "Default Function Arguments".

The idea is very simple, in case there is no value or undefined passed in the functional argument, we already take care of this case in the function definition.

The idea is to initialize parameters with some default values in case no value or undefined is passed.

## [Example 1](./1.js)

**Write a function to displlay greeting message from a person whose details are taken in the arguments (Handle the edge case where one of the arg might be missing by displaying some generic values**

Let's see how can we solve this without default params

```js
// Without default params
function greet (name, age, profession) {
    if (!name || !age || !profession)
        return `Greetings, I am <anonymous>
            I am 20 years old.
            I am a student`;
    else   
        return `Greetings, I am ${name}
            I am ${age} years old.
            I am a ${profession}`;
}
console.log ("With all args: \n", greet ("John", 25, "SDE"));
console.log ("Without all args: \n", greet (16, "Student"));
```

## [Solution to the above problem using default params](./1.js)

```js
// Using default params
function greet (name="anonymous", age=20, profession="stutdent") {
    return `Greetings, I am ${name}
        I am ${age} years old.
        I am a ${profession}`; 
}
console.log ("With all args: \n", greet ("Kepler", 22, "Student"));
console.log ("Without all args: \n", greet ());
```

That's it for today, see you in DailyJS tomorrow :)

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>