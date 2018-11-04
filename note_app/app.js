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

// Start with argv[2] & higher - argv[0] & argv[1] cannot be reassigned for new commands.
// process.argv is part of the Node environment, not a 3rd party module.
let command = process.argv[2];

// Logs the command at index 2
console.log('Command: ', command);

// Logs the updated array with our command
console.log('Process', process.argv);
console.log('Yargs', argv);

// Checks if the command variable paased equals add, list, read, or, remove with error meesage otherwise.
if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Note being read');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recgonized')
}

