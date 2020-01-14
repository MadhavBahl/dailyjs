/**
 * Destructuring
 * Complext Objects
 * Extract the marks in P, C, and M
 * In the given data structure, find the marks of student in highschool
 */

var student = {
    name: 'John',
    age: 18,
    marks: [
        {
            highSchoolName: 'St Joseph',
            highSchoolMarks: {
                phy: 95,
                chem: 91,
                mat: 89
            }
        }, {
            secondarySchooolName: 'DPS',
            secondarySchooolMarks: {
                phy: 100,
                chem: 87,
                mat: 98
            }
        }
    ]
};

// Without destructuring
const physics =  student.marks[0].highSchoolMarks.phy;
const chemistry =  student.marks[0].highSchoolMarks.chem;
const maths =  student.marks[0].highSchoolMarks.mat;

console.log (`P: ${physics} | C: ${chemistry} | M: ${maths}`);

// With Destructuring
const { marks: [ { highSchoolMarks: { phy, chem, mat } }] } = student;

console.log (`P: ${phy} | C: ${chem} | M: ${mat}`);

