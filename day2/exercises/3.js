/**
 * Capitalize the first letter of each name in the names array
 */

const names = ['madhav', 'ram', 'john', 'phillip'];

let capitalized = names.map (name => name.charAt(0).toUpperCase() + name.slice(1));

console.log (capitalized);