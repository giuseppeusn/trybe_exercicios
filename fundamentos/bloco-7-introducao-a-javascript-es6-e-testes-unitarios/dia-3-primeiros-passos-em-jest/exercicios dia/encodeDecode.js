let vogais = ['a', 'e', 'i', 'o', 'u'];
let numb = [1, 2, 3, 4, 5];

function encode(word) {
  let arrayWord = word.split('');

  for (let x in arrayWord) {
    if (arrayWord[x].match(/[a-z]/)) {
      for (let y in vogais) {
        if (vogais[y] === arrayWord[x]) {
          arrayWord[x] = numb[y];
        }
      }
    }
  }

  return arrayWord.join('');
}

function decode(word) {
  let arrayWord = word.split('');

  for (let x in arrayWord) {
    if (arrayWord[x].match(/[1-5]/)) {
      for (let y in numb) {
        if (arrayWord[x] == numb[y]) {
          arrayWord[x] = vogais[y];
        }
      }
    }
  }

  return arrayWord.join('');
}

module.exports = { encode, decode };