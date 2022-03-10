const object = require('./object.js');
const books = object();

const booksOrderedByReleaseYearDesc = () => books.sort((a,b) => b.releaseYear - a.releaseYear);

console.log(booksOrderedByReleaseYearDesc());