/**
 * Set in JS
 */

var students = new Set (["John", "Kepler", "Amanda"]);
console.log (students);

// Add
students.add ("Ronaldo");
students.add ("Johny");
students.add ("John"); // Won't be added
console.log (students);

// Delete
students.delete ("Johny");
console.log (students);

// Clear
students.clear ();
console.log (students); // Empty set

// Add some values
students.add ("Ronaldo");
students.add ("Johny");
students.add ("John");

// Entries
var entries = students.entries ();
console.log (entries);

// Has
console.log ("Has John?", students.has ("John"));