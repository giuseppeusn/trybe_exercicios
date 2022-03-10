const object = require('./object.js');
const books = object();

const everyoneWasBornOnSecXX = () => books.every((item) => item.author.birthYear >= 1901 && item.author.birthYear <= 2000);


console.log(everyoneWasBornOnSecXX());