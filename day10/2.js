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