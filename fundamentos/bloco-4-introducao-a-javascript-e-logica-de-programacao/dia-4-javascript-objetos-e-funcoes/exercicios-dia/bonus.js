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

console.log(convertNumRomano('xix'));

// ----------- Exercicio 2 -----------