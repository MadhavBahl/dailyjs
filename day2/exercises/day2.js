//The MAP Helper
var numbers = [1,2,3,4,5,6,7,8,9,10];

var squared1 = [];

numbers.forEach(function (number) {
  squared1.push(number * number);
})

//Without Arrow function
console.log(squared1);

var squared2 = numbers.map(function (number) {
  return number * number;
})

console.log(squared2);

//With Arrow function
var squared3 = numbers.map(number => {
  return number * number;
});

console.log(squared3);

// Syntax
// array.map(function (currentValue, index, arr), thisValue)
// currentValue: Required. The value of the current element.
// index: Optional. The array index of the current element.
// arr: Optional. The array object the current element belongs to.

//Problems
//1. Make a array of numbers that are doubles of the first array
var num = [12, 9, 7, 4, 17, 14, 35];

var doubles = num.map(function (number) {
  return 2 * number;
});
console.log(doubles);

//2. Take an array of numbers and convert each element into a string
var Numbers = [23, 34, 56, 78, 12, 45];

var string = Numbers.map(function (number) {
  return number.toString(); //Use toString() method to convert to String type
});
console.log(string);
console.log(typeof string[1]);

//3. Capitalize the first letter of each name in the names array
var names = ["dhruvil", "ram", "sagar", "dishant", "bhavya"];

var capitalFirstLetters = names.map(function (name) {
  return name.charAt(0).toUpperCase() + name.replace(name.charAt(0), '');
});
console.log(capitalFirstLetters);
//Can also use name.slice(1) here !!

//4. Given an array of news headlines (take some random data), and enclose the headlines in `<h1>` tag and append them to DOM to display the news headlines
var headlines = [
    "Wow, does that work?",
    "He ran out of money, so he had to stop playing poker",
    "Everyone was busy, so I went to the movie alone.",
    "It was getting dark, and we weren’t there yet.",
    "How was the math test?",
    "The mysterious diary records the voice",
];

var bigHeadlines = headlines.map(function (headline) {
  return "<h1>" + headline + "</h1>"
});

console.log(bigHeadlines);