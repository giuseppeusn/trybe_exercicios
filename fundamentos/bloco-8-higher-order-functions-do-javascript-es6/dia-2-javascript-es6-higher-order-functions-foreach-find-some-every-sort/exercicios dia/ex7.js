const object = require('./object.js');
const books = object();

//Solução 1

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

//Solução 2 (filter)

const authorUnique2 = () => {
  let birthYearArray = [];
  let answer = true;

  books.forEach((item) => birthYearArray.push(item.author.birthYear));

  if(findDuplicates(birthYearArray).length !== 0) {
    answer = false;
  }

  return answer;
}

let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(authorUnique2());