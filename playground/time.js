var moment = require('moment');
//
// var date = new Date();
// console.log(date.getDate());

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('LT'));
console.log(date.format('h:mm a'));
