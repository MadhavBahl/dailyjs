/**
 * For...In Loop
 * Given an object having names and grades of each student, 
 * write a function which displays the scores of each student and then displays the class average
 */

const classScore = {
    "John": 98,
    "Kepler": 97,
    "Amanda": 86,
    "James": 85
};

const classAverage = (scores) => {
    let sum = 0, length = 0;
    for (const student in scores) {
        sum += scores[student];
        console.log (`${student} has a score: ${scores[student]}`);
        length++;
    }
    return sum/length;
}

const avg = classAverage (classScore);
console.log (`Class average is: ${avg}`);