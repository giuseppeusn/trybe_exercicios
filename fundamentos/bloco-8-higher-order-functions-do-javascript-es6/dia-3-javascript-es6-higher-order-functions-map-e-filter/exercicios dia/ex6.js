const object = require('./object');
const books = object();

function oldBooks() {
  return books.filter((item) => 2021 - item.releaseYear > 60).map((item) => item.name);
}

console.log(oldBooks());