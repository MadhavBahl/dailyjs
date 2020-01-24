/**
 * Class Syntax
 */

class MyClass {
    constructor (data) {
        this.data = data;
    }

    showData () {
        console.log ('Data is: ', this.data);
    }
}

// To make a new instance of a class
const myClass = new MyClass ('ABC');