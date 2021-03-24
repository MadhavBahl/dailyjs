//The Find Helper
//Given an array of numbers,find the first element which is a multiple of 7

const numbers = [1, 13, 15, 18, 28, 32, 47, 50];
let firstMultiple;

for (let i = 0; i < numbers.length; i++)
{
  if (numbers[i] % 7 === 0)
  {
    firstMultiple = numbers[i];
    break;
  }
}

//With Find Helper
const numbers2 = [1, 13, 15, 18, 28, 32, 47, 50];

let firstMultiple2 = numbers.find(function (number) {
  if (number % 7 === 0)
  {
    return true;
  }
});

console.log(firstMultiple2);

//With arrow function
const numbers3 = [1, 13, 15, 18, 28, 32, 47, 50];

let firstMultiple3 = numbers3.find(number => {
  if (number % 7 === 0)
  {
    return true;
  }
});

console.log(firstMultiple3);

//Given an array of objects having the data of students, find the student having register number 9018
const students = [
    { regNo: 0192, name: "Madhav" },
    { regNo: 1302, name: "Ram" },
    { regNo: 6723, name: "Rahul" },
    { regNo: 9018, name: "John" },
    { regNo: 4211, name: "Taylor" },
];

let wantedStudent = students.find(student => {
  if (student.regNo === 9018)
  {
    return true;
  }
})

console.log(wantedStudent.name);

// Syntax
// array.find(function(currentValue, index, arr),thisValue)
// currentValue: Required. The value of the current element
// index: Optional. The array index of the current element
// arr: Optional. The array object the current element belongs to
// thisValue: Optional. A value to be passed to the function to be used as its "this" value

