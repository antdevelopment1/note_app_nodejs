console.log('Starting App');

// Built in node modules
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err) {
    if (err) {
        console.log('error');
    }
});