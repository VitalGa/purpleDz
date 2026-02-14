const { myName, myHobbies } = require('./multiply-exports');

const myFrendsName = 'Alice';

module.exports.myName = myName;
module.exports.myFrendsName = myFrendsName;
module.exports.myGreatestHobbies = myHobbies;
