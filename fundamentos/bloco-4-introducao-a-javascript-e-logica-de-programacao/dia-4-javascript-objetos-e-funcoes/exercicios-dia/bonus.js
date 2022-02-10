// ----------- Exercicio 1 -----------

function convertNumRomano(string) {
  string = string.toUpperCase();
  let arrayNum = string.split('');
  let num = '';
  let result = 0;
  let algarismos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  for (x in arrayNum) {
    for (y in algarismos) {
      if (arrayNum[x] === y) {
        num += algarismos[y];
      }
    } 
  }

  let checkNum = num.split('');

  if (checkNum[0] > checkNum[1]) {
    result = checkNum[0] + checkNum[1];      
  } else {
    result = checkNum[1] - checkNum[0];
  }

  // for (let x in checkNum) {
  //   if (checkNum[x] > checkNum[parseInt(x) + 1]) {
  //     result = checkNum[x] + checkNum[parseInt(x) + 1];      
  //   } else {
  //     result = checkNum[parseInt(x) + 1] - checkNum[x];
  //   }
  // }

  return result;
}

console.log(convertNumRomano('IIV'));
