console.log('Starting notes.js');


let addNote = (title, body) => {
    console.log('Adding note', title, body);
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