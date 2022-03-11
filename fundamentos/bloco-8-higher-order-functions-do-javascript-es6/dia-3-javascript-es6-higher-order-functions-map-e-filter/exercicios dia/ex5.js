const object = require('./object');
const books = object();

function fantasyOrScienceFictionAuthors() {
  const obj = books.filter((item) => item.genre === 'Ficção Científica' || item.genre === 'Fantasia');
  let authors = [];

  obj.forEach((item) => authors.push(item.author.name));

  return authors.sort();
}

console.log(fantasyOrScienceFictionAuthors());