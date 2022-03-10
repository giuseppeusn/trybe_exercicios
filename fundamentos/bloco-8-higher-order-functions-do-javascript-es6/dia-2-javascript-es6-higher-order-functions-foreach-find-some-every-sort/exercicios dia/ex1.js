const object = require('./object.js');
const books = object();

function authorBornIn1947() {
  return books.find((item) => item.author.birthYear === 1947).author.name;
}

console.log(authorBornIn1947());