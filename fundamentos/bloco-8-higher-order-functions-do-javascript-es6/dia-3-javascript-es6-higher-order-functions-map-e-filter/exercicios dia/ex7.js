const object = require('./object');
const books = object();

function authorWith3DotsOnName() {
  return books.filter((item) => item.author.name.split('.').length > 3).map((item) => item.name);
}

console.log(authorWith3DotsOnName());