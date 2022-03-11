const object = require('./object');
const books = object();

function nameAndAge() {
  return books.map((item) => (
    {
      author: item.author.name, 
      age: item.releaseYear - item.author.birthYear
    }
  )).sort((a, b) => a.age - b.age);
}

console.log(nameAndAge());