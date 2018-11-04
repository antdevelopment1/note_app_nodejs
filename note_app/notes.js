// Starts notes.js file
console.log('Starting notes.js');

// Imports node module
const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        // We then parse the data into
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// Function expression with an anonymous function that accepts two arguments title and body
let addNote = (title, body) => {
   
    let notes = fetchNotes();
    // Saves an obejct inside our annoymous function
    let note = {
        title: title,
        body: body
    };
    
    // Will store an array with all notes that already exsists inside the notes array that have the title of the note the user will try to create
    // This line will return a bollean value to see if the note that got passed to our 
    let duplicateNotes = notes.filter((note) => note.title === title);

    // If the length of our duplicateNotes === 0 meaning we have not yet duplicated the title name then we want to go ahead an execute our if statements code block
    // Otherwise if we have duplicated the title name then we just won't push that data into our array
    if (duplicateNotes.length === 0) {
        // Pushes the the strignified note into our notes array
        notes.push(note);
        // Calls the saveNote function on our notes object and writes it to our json file and converts the contents int the file back to json
        saveNotes(notes);
        // We return the original object back from this function containing our title and body
        return note;
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


