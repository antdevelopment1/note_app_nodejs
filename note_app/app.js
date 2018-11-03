console.log('Starting App');

// Built in node modules
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.addNote();
console.log(res);

let add = notes.add(3, 5);
console.log(add);
