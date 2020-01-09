# Day 15: Destructuring Part 2

![Cover](./cover.png)

As we discussed yesterday, destructuring has many use cases, and we will discuss one per day.

Yesterday we discussed that destructuring can be used to extract properties and their values out of an object.

Today's discussion will be about how destructuring can be used to pull out properties from an object within function arguments.

Let's take the yesterday's example forward.

## 2. Pulling properties out of objects when they are passed as function arguemnts

Yesterday we saw an example for object destructuring, let's see today's topic on the same example.

**Make a greetings function which takes studentDetails object as argument and returns a greeting message**

Let's solve this problem with normal object destructuring and with destructuring in function arguments.

## [`Greetings` example - solution 1](./1.js)

```js
var studentDetails =  {
    first_name: "Madhav",
    last_name: "Bahl",
    profession: "Student",
    age: 21
};

function greetings (studentDetails) {
    var { first_name, last_name, profession, age } = studentDetails;

    return `Hi, I am ${first_name} ${last_name}.
        I am a ${profession}
        My age is ${age}`
}
```

Yesterday when we saw this example without destructuring, we saw that we had to write 4 lines (= num of properties) just to extract variables from the object, but with destructuring that was reduced to a single line.

Now that can also be reduced further.

## [`Greetings` example  - destructuring in function argument.](./1.js)

**Question:** Make a greetings function which takes studentDetails object as argument and returns a greeting message.

```js
var studentDetails =  {
    first_name: "Madhav",
    last_name: "Bahl",
    profession: "Student",
    age: 21
};

// Destructuring in function argument
function greetings3 ({ first_name, last_name, profession, age }) {
    return `Hi, I am ${first_name} ${last_name}.
        I am a ${profession}
        My age is ${age}`
}
```

As you can see, this reduced the 4 lines (without destructuring) of extracting properties, into 0 explicit lines.

And you will see this type of destructuring quite often if you are aiming to become a JS developer, so keep this syntax in mind :)

## Download your free eBook

<a href="./ebook.pdf" style="display: inline-block; margin: 0.3em; padding: 1.2em 5em; overflow: hidden; position: relative; text-decoration: none; text-transform: uppercase; border-radius: 3px;  -webkit-transition: 0.3s; -moz-transition: 0.3s; -ms-transition: 0.3s; -o-transition: 0.3s;  transition: 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.5); border: none;  font-size: 15px; text-align: center;   background-color: #03A9F4; color: white; margin-left: 38%;" download class="btn-rounded-white">Claim Your Free PDF Here</a>