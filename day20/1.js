/**
 * Destructuring
 * Removing the messed up arguments
 */

// In a huge code base, somewhere there exists a function called registerEvent
function registerEvent (eventName, eventDate, venue, timings, organizerName, organizerEmail) {
    // Create a new event
}

// Other Code
// Other Code
// Other Code
// Other Code
// Other Code
// Other Code
// Other Code
// Other Code

// Somewhere in the middle we need to call it
// BUT, to call it we must enter the order of arguments corerctly
// With such a huge code base, it is unlikely that we would remember, 
// So go back to the function definition and see the order of arguments.
registerEvent ('DanceFest', '10 oct', 'Delhi', '9 to 12', 'Ram', 'ram@xyz.com');

// Other Code
// Other Code
// Other Code
// Other Code
// Other Code
// Other Code

// Now we need to call it again
registerEvent ('...', '...', '...', '...', '....', '...');

// It's becoming challenging to remember the order of arguments
// Solution? Pass an object which contains all those properties
const eventDetails = {
    eventName: 'DanceFest',
    eventDate: '10 oct',
    venue: 'Delhi',
    timings: '9 to 10',
    organizerName: 'Ram',
    organizerEmail: 'ram@xyz.com'
};

function registerRefactored ({eventName, eventDate, venue, timings, organizerName, organizerEmail}) {
    // Create a new event
}

// Here, the order of arguments doesn't matter, the properties gets destructured from the object
// You just have to pass the object while calling the function
signupRefactored (eventDetails);