var numbers = [23, 45, 12, 89, 78, 40, 7, 99];

for (var i = 0; i < numbers.length; i++)
{
  console.log(numbers[i]);
}

numbers.forEach(function (number) {
  console.log(number);
})

numbers.forEach(number => {
  console.log(number);
})

//Same Output by all

//Sum of elements of the array
const numbers = [6, 1, 2, 3, 8];
let sum = 0;

numbers.forEach(function(number){
  sum += number;
})
console.log(sum);

//Syntax
// array.forEach(function (currentValue, index, arr), thisValue)

// currentValue: Required. The value of the current element
// index: Optional. The array index of the current element
// arr: Optional. The array object the current element belongs to
// thisValue: Optional. A value to be passed to the function to be used as its "this" value.

//Find and print product of all numbers in the given array which are divisible by 2?
var numbers = [23, 45, 12, 89, 8, 41, 7, 99, 21, 6];

var product = 1;

numbers.forEach(function (number) {
  if (number % 2 === 0) {
    product *= number;
  }
});

console.log(product);