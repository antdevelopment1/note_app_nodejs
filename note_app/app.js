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

let command = argv._[0]

if (command === 'add') {
    
    let note = notes.addNote(argv.title, argv.body);
    // If our note is a valid object
    if (note) {

        console.log('Note created.');

        notes.logNote(note);

    } else {
        
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
    
    let noteRemoved = notes.removeNote(argv.title);
   
    let message = noteRemoved ? 'Note was removed' : 'Note was not found';

    console.log(message);
  
} else {

    console.log('Command not recognized')

}

