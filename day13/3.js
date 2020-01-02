/**
 * Given the shopping list of day1 and day2, 
 * form a new list with first element "Combined" 
 * and then combine the lists of day1 and day2
 */

let day1 = [ "peas", "watermelon" ];
let day2 = [ "mushroom", "banana" ];

let combined = [ "combined", ...day1, ...day2 ];

console.log (combined);
// ["combined", "peas", "watermelon", "mushroom", "banana"]