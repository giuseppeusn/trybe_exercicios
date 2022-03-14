const object = require('./object');
const books = object();

function longestNamedBook() {
  const bookName = books.reduce((acc, item) => {
    if (acc.name.length < item.name.length) {
      return item;
    }

    return acc;
  })

  return bookName;
}

console.log(longestNamedBook());