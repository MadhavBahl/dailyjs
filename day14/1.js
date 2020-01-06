/**
 * Destructuring
 * Pulling properties out of objects
 * make a greetings function which takes
 * studentDetails object as argument and returns a greeting message
 */

var studentDetails =  {
    first_name: "Madhav",
    last_name: "Bahl",
    profession: "Student",
    age: 21
};

// Without Destructuring
function greetings1 (studentDetails) {
    var first_name = studentDetails.first_name;
    var last_name = studentDetails.last_name;
    var profession = studentDetails.profession;
    var age = studentDetails.age;

    return `Hi, I am ${first_name} ${last_name}.
        I am a ${profession}
        My age is ${age}`
}
console.log ("Without destructuring: ", greetings1(studentDetails));

// With Destructuring
function greetings2 (studentDetails) {
    var { first_name, last_name, profession, age } = studentDetails;

    return `Hi, I am ${first_name} ${last_name}.
        I am a ${profession}
        My age is ${age}`
}
console.log ("Without destructuring: ", greetings2(studentDetails));