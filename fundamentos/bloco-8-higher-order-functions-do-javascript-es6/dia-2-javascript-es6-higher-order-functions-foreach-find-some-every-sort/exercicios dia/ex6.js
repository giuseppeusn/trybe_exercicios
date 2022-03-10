const object = require('./object.js');
const books = object();

const someBookWasReleaseOnThe80s = () => books.some((item) => item.releaseYear >= 1980 && item.releaseYear <= 1989);

console.log(someBookWasReleaseOnThe80s());