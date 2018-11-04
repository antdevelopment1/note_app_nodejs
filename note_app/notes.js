// Starts notes.js file
console.log('Starting notes.js');

// Imports node module
const fs = require('fs');

// Function expression with an anonymous function that accepts two arguments title and body
let addNote = (title, body) => {

    // Saves an empty array inside our anonymous function
    let notes = [];

    // Saves an obejct inside our annoymous function
    let note = {
        title: title,
        body: body
    };

    // We add the try catch for error handeling. If the file does not exsist yet then it will move on to the line where we push the note
    // into our notes object. The next step would be to run fs.writeFileSync which creates the notes-data.json file and we pass the notes
    // object to the file and it gets converted to json prior to being written to the file. 
    // If the file already exsists then we go into our try/catch statement and read our current file notes-data.json
    // The current json string insdie that file gets assigned to noteString. From there we parse it back into a javascript object
    // And then we push that object into our notes array and proceed to fs.writeFileSync which will add our whole array with the new note 
    // added and converted back into json
    try {
        let notesString = fs.readFileSync('notes-data.json');
        // We then parse the data into
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    // Will store an array with all notes that already exsists inside the notes array that have the title of the note the user will try to create
    // This line will return a bollean value to see if the note that got passed to our 
    let duplicateNotes = notes.filter((note) => note.title === title);

    // If the length of our duplicateNotes === 0 meaning we have not yet duplicated the title name then we want to go ahead an execute our if statements code block
    // Otherwise if we have duplicated the title name then we just won't push that data into our array
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }

};

let getAll = () => {
    console.log('Getting all notes');
}

let readNote = (title) => {
    console.log('Reading note', title);
}

let removeNote = (title) => {
    console.log('Note has been removed.', title);
}

module.exports = {
    addNote: addNote,
    getAll: getAll,
    readNote: readNote,
    removeNote: removeNote
};