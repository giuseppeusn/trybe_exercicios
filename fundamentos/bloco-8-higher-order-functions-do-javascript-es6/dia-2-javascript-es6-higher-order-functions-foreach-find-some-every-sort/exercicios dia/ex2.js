const object = require('./object.js');
const books = object();

function smallerName() {
  let nameBook;
  let last;
  
  books.forEach((item) => {
    last > item.name.length ? nameBook = item.name : null;
    last = item.name.length;
  });

  return nameBook;
}

console.log(smallerName());
