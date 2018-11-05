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


let addNote = (title, body) => {
   
    let notes = fetchNotes();

    // Saves an obejct inside our annoymous function
    let note = {
        title: title,
        body: body
    };
    
    let duplicateNotes = notes.filter((note) => note.title === title);
    
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
    return fetchNotes();
}

let readNote = (title) => {
    // Fetches our javascript object
    let notes = fetchNotes();

    // Checks to see which file was passed and returns a new array with only the value === to the title passed by user
    let filteredNotes = notes.filter((note) => note.title === title);
    
    // We return the value of the first and only index in our array
    return filteredNotes[0];

}

let removeNote = (title) => {
    // Fetch notes
    let notes = fetchNotes();

    // Filters notes, only returning true for the ones that do not equal the title of the note that was paased by user
    let filteredNotes = notes.filter((note) => note.title !== title);

    // Only writes the data to our json file for values that were not passed by our user
    saveNotes(filteredNotes);
    
   
    return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
    debugger;
    console.log('------');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    readNote: readNote,
    removeNote: removeNote,
    logNote: logNote
};


// Question does writefileSync know to overwrite itself if it already exsists


