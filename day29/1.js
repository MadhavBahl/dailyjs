/**
 * WeakSet
 */

let classRoom = new WeakSet ();

const stud1 = { name: "John" };
const stud2 = { name: "Amanda" };
const stud3 = { name: "Kepler" };

// Add
classRoom.add (stud1);
classRoom.add (stud2);
classRoom.add (stud3);

// Delete
classRoom.delete (stud3);

// has
console.log ("Has stud1?", classRoom.has (stud1));
console.log ("Has stud2?", classRoom.has (stud2));
console.log ("Has stud3?", classRoom.has (stud3));