/**
 * For..Of Loop
 * Write a function to reverse a string using for..of loop
 */

const reverseStr = (sentence) => {
    let reversed = '';
    for (const letter of sentence) {
        reversed = letter + reversed;
    }
    return reversed;
}

const myStr = 'Hello World!';
console.log (`Reverse of "${myStr}" = ${reverseStr(myStr)}`);