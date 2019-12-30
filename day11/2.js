/**
 * Write an object that contains the marks of a particular student, 
 * write a function to calculate the percentage score
 */

// Before ES6

// var physics = 98;
// var maths = 95;
// var chem = 89;

// var studentInfo = {
//     physics: physics,
//     maths: maths,
//     chem: chem,
//     calcScore: function () {
//         return (this.physics + this.maths + this.chem)/3
//     }
// }
// console.log (studentInfo);
// console.log (studentInfo.calcScore());

const physics = 98;
const maths = 95;
const chem = 89;

const studentInfo = {
    physics,
    maths,
    chem,
    calcScore () {
        return (this.physics + this.maths + this.chem)/3
    }
}
console.log (studentInfo);
console.log (studentInfo.calcScore());