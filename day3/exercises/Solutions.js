/**
 * Find the  first fruit name whose first character is m
 * author: https://github.com/rajat-ds
 * date: 09-03-21
 */

const fruits = ["apple", "banana", "tomato", "mango", "cherry"];
const fruitResult = fruits.find((fruit) => fruit.startsWith("m"));
console.log("fruit starting with m ", fruitResult);

/**
 * Find the  first tree having name oak
 * author: https://github.com/rajat-ds
 * date: 09-03-21
 */
const trees = [
  { name: "birch", count: 4 },
  { name: "maple", count: 5 },
  { name: "oak", count: 2 },
];

const result = trees.find((tree) => tree.name === "oak");
console.log(result)
