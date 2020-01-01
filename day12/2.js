/**
 * Write a function that takes in the name of a student 
 * and his marks and returns a grade statement
 */

function gradeStatement (name, ...marks) {
    // Number of subjects
    const numOfSubjects = marks.length;

    // Sum of marks
    const sum = marks.reduce ((total, mark) => total+mark, 0);

    // Average of marks
    const average = sum/numOfSubjects;

    let grade;
    if (average >= 90)  grade = 'S';
    else if (average >= 80) grade = 'A';
    else if (average >= 70) grade = 'B';
    else if (average >= 60) grade = 'C';
    else    grade = 'F';

    return `The student ${name} has the grade - ${grade}`;
}

console.log (gradeStatement("John", 90, 95, 98, 82));
console.log (gradeStatement("Amanda", 61, 82, 99));
