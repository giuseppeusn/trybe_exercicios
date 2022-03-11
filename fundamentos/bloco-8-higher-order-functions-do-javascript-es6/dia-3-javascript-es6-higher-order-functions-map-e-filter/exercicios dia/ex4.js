const object = require('./object');
const books = object();

function oldBooksOrdered() {
  return books.filter((item) => 2021 - item.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered());