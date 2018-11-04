// Starting Note App
console.log('Starting App');

// =======
// MODULES
// =======
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

// Logs the command at index 2
console.log('Command: ', command);

// Logs the updated array with our command
// console.log('Yargs', argv);
// Checks if the command variable paased equals add, list, read, or, remove with error meesage otherwise.
if (command === 'add') {
    // 
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created.');
        console.log('------');
        console.log('Title: ' + note.title);
        console.log('Body: ' + note.body);
    } else {
        console.log('Please choose a different title name. Title already exsists');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove') {
    console.log('Removing note');
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized')
}

