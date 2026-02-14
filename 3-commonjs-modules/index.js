// console.log(module);
// console.log(arguments.callee.toString());
// console.log(__dirname);
// console.log(__filename);
// console.log(require);

const { myName, myHobbies, myFavoriteNumber } = require('./multiply-exports');
const {
    myName: myOtherName,
    myFrendsName,
    myGreatestHobbies,
} = require('./import-and-export');

// const greetingFn = require('./single-exports');

myHobbies.push('Coding');

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// greetingFn(myName);

console.log(myOtherName);
console.log(myFrendsName);
console.log(myGreatestHobbies);
