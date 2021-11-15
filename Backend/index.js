const Dragon = require('./dragon.js');

const tim = new Dragon ({
    birthday:new Date(),
    nickname:'tim'
});

const pam = new Dragon({
    birthday:new Date(),
    nickname: 'pam'});
// specify that this new date is the birthdate and nickname is a String
console.log(tim)
console.log(pam);