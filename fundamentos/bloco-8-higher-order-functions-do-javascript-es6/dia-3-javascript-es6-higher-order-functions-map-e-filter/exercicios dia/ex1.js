const object = require('./object');
const books = object();

function formatedBookNames() {
  return books.map((item) => `${item.name} - ${item.genre} - ${item.author.name}`);
}

console.log(formatedBookNames());