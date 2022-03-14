const object = require('./object');
const books = object();

function reduceNames() {
  const names = books.reduce((acc, item, index, arr) => {
    if (index === arr.length - 1) {
      return `${acc} ${item.author.name}.`;
    }

    return `${acc} ${item.author.name},`;
  }, '');

  return names;
}

console.log(reduceNames());