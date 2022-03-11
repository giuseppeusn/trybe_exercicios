const object = require('./object.js');
const books = object();

function getNamedBook() {
  let nameBook;
  
  books.forEach((item) => {
    26 === item.name.length ? nameBook = item : null;
  });

  return nameBook;
}

console.log(getNamedBook());