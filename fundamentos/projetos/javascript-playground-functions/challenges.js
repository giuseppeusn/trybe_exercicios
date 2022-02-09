// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(word) {
  let arrayWord = word.split(' ');

  return arrayWord;
}

// Desafio 4
function concatName(arrayWord) {
  let plv1 = arrayWord[arrayWord.length - 1];
  let plv2 = arrayWord[0];

  return `${plv1}, ${plv2}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;

  return pontos;
}

// Desafio 6

function highestCount(arrayNum) {
  let maior = arrayNum[0];
  let qtd = 0;

  for (let x in arrayNum) {
    if (maior < arrayNum[x]) {
      maior = arrayNum[x];
    }
  }

  for (let x in arrayNum) {
    if (maior === arrayNum[x]) {
      qtd += 1;
    }
  }

  return qtd;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;

  if ((Math.abs(distCat1)) === (Math.abs(distCat2))) {
    distCat1 = Math.abs(distCat1);
    distCat2 = Math.abs(distCat2);
  }

  if (distCat1 > distCat2) {
    return 'cat1';
  } if (distCat1 < distCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function fizzBuzz(arrayNum) {
  let arrayWord = [];
  for (let x in arrayNum) {
    if (arrayNum[x] % 3 === 0 && arrayNum[x] % 5 === 0) {
      arrayWord[x] = 'fizzBuzz';
    } else if (arrayNum[x] % 3 === 0) {
      arrayWord[x] = 'fizz';
    } else if (arrayNum[x] % 5 === 0) {
      arrayWord[x] = 'buzz';
    } else {
      arrayWord[x] = 'bug!';
    }
  }

  return arrayWord;
}

let vogais = ['a', 'e', 'i', 'o', 'u'];
let numb = [1, 2, 3, 4, 5];

// Desafio 9
// eslint-disable-next-line sonarjs/cognitive-complexity
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

// eslint-disable-next-line sonarjs/cognitive-complexity
function decode(word) {
  let arrayWord = word.split('');

  for (let x in arrayWord) {
    if (arrayWord[x].match(/[1-5]/)) {
      for (let y in numb) {
        // eslint-disable-next-line eqeqeq
        if (arrayWord[x] == numb[y]) {
          arrayWord[x] = vogais[y];
        }
      }
    }
  }

  return arrayWord.join('');
}

// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  array.sort();
  let tecnologias = [{}];

  // eslint-disable-next-line guard-for-in
  for (let x in array) {
    tecnologias[x] = {
      tech: array[x],
      name,
    };
  }
  return tecnologias;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
