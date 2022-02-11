// ----------- Exercicio 1 -----------

function convertNumRomano(string) {
  string = string.toUpperCase();
  let len = string.length;
  let algarismos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let sum = algarismos[string[len - 1]];
  let value = algarismos[string[len - 1]];


  for (let x = 2; x <= len; x += 1) {
    let prox = algarismos[string[len - x]];
    if (value <= prox) {
      sum += prox;
    } else {
      sum -= prox;
    }
    value = prox;
  }

  return sum;
}

// console.log(convertNumRomano('xix'));

// ----------- Exercicio 2 -----------

function arrayOfNumbers(vector) {
  
  let newArray = [];

  for (x in vector) {
    for (y in vector[x]) {
      newArray.push(vector[x][y]);
    } 
  }
  
  for (z in newArray) {
    if (newArray[z] % 2 === 1) {
      newArray.splice(z,1);
    }
  }

  return newArray;
}

// console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

// ----------- Exercicio 3 -----------

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function contentBasket(array) {

  let cont = {};
  let msg = 'Sua cesta possui:';

  array.forEach(function(x) { cont[x] = (cont[x] || 0)+1; });

  for (x in cont) {
    if (cont[x] > 1) {
      msg += ' ' + cont[x] + ' ' + x + 's';
    } else {
      msg += ' ' + cont[x] + ' ' + x;
    }
  }

  return msg;
}

console.log(contentBasket(['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']));

// ----------- Exercicio 4 -----------