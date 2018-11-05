// =================
//     MODULES
// =================
// Built in node modules 
const fs = require('fs');
// 3rd Party node module
const _ = require('lodash'); 
const yargs = require('yargs');
// Local node modules
const notes = require('./notes.js');
// Uses yargs npm to parse passed values that get converted into an object
const argv = yargs.argv;

// Changes from process.argv to using yargs.argv. We used process.argv from nodes enviornment to illustrate how difficult it would be to parse through
// the input passed in from the user. The yargs npm makes it much easier to parse through information putting things into an pbject as opposed to an Array.
// const argv = yargs.argv;
let command = argv._[0]


// Logs the updated array with our command
// console.log('Yargs', argv);
// Checks if the command variable paased equals add, list, read, or, remove with error meesage otherwise.
if (command === 'add') {
    // We save the function call of addNote called on a property of argv and save it to note.
    // This function is called on notes which is our parsed javascript object.
    let note = notes.addNote(argv.title, argv.body);
    // If our note is a valid object
    if (note) {
        // We log to the user the note has been created
        console.log('Note created.');
        notes.logNote(note);
    } else {
        // Otherwise if it's not a valid object becuase our title already exists we log to the user letting them know the title they have chosen already exsists
        console.log('Please choose a different title name. Title already exsists');
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNote(note);
    })
} else if (command === 'read') {
        let note = notes.readNote();
} else if (command === 'remove') {
    // We save the function call of removeNote called on a property of argv and save it to noteRemoved.
    // This function is called on notes which is our parsed javascript object.
    let noteRemoved = notes.removeNote(argv.title);
    // If our function call returns true then we will log to the user that a note was removed
    // Otherwise we want to log that the note was not found because has been removed
    let message = noteRemoved ? 'Note was removed' : 'Note was not found';
    console.log(message);
  //  If no valid command has been entered then we want to log command not recognized. 
} else {
    console.log('Command not recognized')
}

