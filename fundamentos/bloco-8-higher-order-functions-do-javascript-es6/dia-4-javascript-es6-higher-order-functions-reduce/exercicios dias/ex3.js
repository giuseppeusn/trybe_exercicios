const object = require('./object');
const books = object();

function averageAge() {
  const sumAges = books.reduce((acc, num) => {
    const age = num.releaseYear - num.author.birthYear;
    return acc + age;
  }, 0);

  return sumAges / books.length;
}

console.log(averageAge());