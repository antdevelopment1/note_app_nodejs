// var obj = {
//     name: 'April'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "April", "age": 27}';
// console.log(personString);
// let person = JSON.parse(personString);
// console.log(person);
// console.log(typeof person);

// Imports Node Module
const fs = require('fs');

// Creates an object with two properties (title and body)
let originalNote = {
    title: 'Some title',
    body: 'Some body'
}

// We log the type of original note which returns an object
console.log(typeof originalNote);

// We convert our current object into valid json data
let originalNoteString = JSON.stringify(originalNote);

// We log the value type of our originalNoteString which evavluates to a string now that it valid JSON
console.log(typeof originalNoteString);

// We log the value of our jsonafied object which is now a string
console.log(originalNoteString);

// We use a method of fs to create a new file called notes.json and passes/writes our variable/jsonified data into the notes.json file
fs.writeFileSync('notes.json', originalNoteString);

// Saves data from notes.json into the noteString variable
let noteString = fs.readFileSync('notes.json');

// Parses data back to javascript converting our string back into an object
let note = JSON.parse(originalNoteString);

// We log the type of note seeing that it is now an object an no longer a string
console.log(typeof note);

// We log a property from note.title whose value is the title and do the same for title.body whose value is the body
console.log(note.title);  
console.log(note.body);
