console.log('Starting App');

// Built in node modules
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// Checks if a value evaluates to a string
console.log(_.isString(true));
console.log(_.isString('Andrew'));

// Uniq gets rid of duplicates
let filferedArray = _.uniq(['April', 1, 2, 3, 4, 2, 'April', false, true, true]);
console.log(filferedArray);