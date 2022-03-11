const object = require('./object');
const books = object();

function fantasyOrScienceFiction() {
  return books.filter((item) => item.genre === 'Ficção Científica' || item.genre === 'Fantasia');
}

console.log(fantasyOrScienceFiction());