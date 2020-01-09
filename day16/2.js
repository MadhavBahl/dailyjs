/**
 * Array Destructuring
 * Given an array having 3 elements, 
 * which are the values of red, green and blue of an rgb color code. 
 * Extract those values into different variables.
 */

var rgb = [ 254, 135, 97 ];

// Without destructuring
var red0 = rgb[0];
var green0 = rgb[1];
var blue0 = rgb[2];

console.log (`Red: ${red0} | Green: ${green0} | Blue: ${blue0}`);

// With destructuring
var [ red, green, blue ] = rgb;

console.log (`Red: ${red} | Green: ${green} | Blue: ${blue}`);