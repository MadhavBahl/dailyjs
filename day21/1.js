/**
 * Default Parameters
 * Write a function to displlay greeting message 
 * from a person whose details are taken in the arguments 
 * (Handle the edge case where one of the arg might be missing 
 * by displaying some generic values
 */

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

// Using default params
function greetings (name="anonymous", age=20, profession="stutdent") {
    return `Greetings, I am ${name}
        I am ${age} years old.
        I am a ${profession}`; 
}
console.log ("With all args: \n", greetings ("Kepler", 22, "Student"));
console.log ("Without all args: \n", greetings ());