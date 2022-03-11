const object = require('./object.js');
const books = object();

const authorUnique = () => {
  let birthYearArray = [];
  let answer = true;

  books.forEach((item) => {
    let birthYear = item.author.birthYear;

    birthYearArray.forEach((age) => {
      if (birthYear === age) {
        answer = false;
      }
    });
    
    birthYearArray.push(birthYear)
  });

  return answer;
}
console.log(authorUnique());