// Iteration through array

var fruits = [ 'mango', 'orange', 'pineapple', 'guava' ];

// Baisc Syntax

for (var i=0; i<fruits.length; i++) {
    console.log (fruits[i]);
}

// forEach syntax

fruits.forEach (function (fruit) {
    console.log (fruit);
});

// forEach with arrow function

fruits.forEach (fruit => {
    console.log (fruit);
})