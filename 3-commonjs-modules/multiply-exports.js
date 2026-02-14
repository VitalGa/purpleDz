const myName = 'Bogdan';
const myHobbies = ['Sports', 'Cooking', 'Reading'];
const myFavoriteNumber = 42;

console.log('Text from the CommonJS module multiply-exports.js');

module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
