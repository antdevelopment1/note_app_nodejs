// var obj = {
//     name: 'April'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

let personString = '{"name": "April", "age": 27}';
console.log(personString);
let person = JSON.parse(personString);
console.log(person);
console.log(typeof person);