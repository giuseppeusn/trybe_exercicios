const object = require('./object.js');
const books = object();

//Solução 1 (forEach dentro de outro forEach)

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

const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(authorUnique2());

//Solução 3 (map e filter)

const authorUnique3 = () => {
  const answer = books.map((item) => item.author.birthYear).filter((item, index, arr) => arr.indexOf(item) != index);

  if(answer.length !== 0) {
    return false
  }

  return true;
}

console.log(authorUnique3());