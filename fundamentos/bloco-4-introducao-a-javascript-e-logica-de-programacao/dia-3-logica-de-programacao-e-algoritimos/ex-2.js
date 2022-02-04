let word = 'trybe';
let arrayWord = word.split('');
let newWord = [];
let num = arrayWord.length;

for (let x = 1; x < num + 1; x += 1) {
  newWord[x - 1] = arrayWord[num - x];
}

console.log(newWord);