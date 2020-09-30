/**
 * Find and print product of all numbers in the given array which are divisible by 2?
 * author: https://github.com/tejaswini22199
 * date: 1-10-20
 */
const arr=[1,2,3,4,5];
let product=1;
arr.forEach(function(a){
    if(a%2==0)
    product=product*a;
});
console.log(product);
