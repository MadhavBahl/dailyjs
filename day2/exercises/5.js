/**
 * Given an array of strings map them to the reverse of the given strings?
 * author:https://github.com/tejaswini22199
 * date: 18-10-20
 */
const arr=["Cat","Dog","Lion"];
rev=arr.map(function (arr){
    let re=arr.split('').reduce(function (r,c){
        return c+r;
        },"");
        return re;
});
console.log(rev);