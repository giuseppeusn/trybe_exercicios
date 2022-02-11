// ----------- Exercicio 1 -----------

function convertNumRomano(string) {
  string = string.toUpperCase();
  let arrayNum = string.split('');
  let array = [0];
  let checkNum = [];
  let num = '';
  let result = 0;
  let sum = 0;
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
        checkNum.push(algarismos[y]);
        break;
      }
    } 
  }

  // num = '10,100'

  // let checkNum = num.split(',');

  for (x in checkNum){
    if (checkNum[x] > array[array.length - 1]) {
      array[x] = checkNum[x];
      maior = x;
    }
  }

  let value = checkNum[maior];
  checkNum[maior] = 0;

  if(maior == checkNum.length - 1){
    for (let x in checkNum) {
      sum += parseInt(checkNum[x]);
    }
  
    if (checkNum.length - 1 == maior) {     
      result = value - sum;      
    } else {
      result = value + sum;
    }
  } else {
    if (maior < checkNum.length) {
      for (let x = parseInt(maior); x < checkNum.length; x += 1) {
        sum += parseInt(checkNum[x]);
      }

      result += value + sum;
    } 
    sum = 0;
    if (maior > 0){
      for (let x = maior - 1; x >= 0; x -= 1) {
        sum += parseInt(checkNum[x]);
      }
      result = result - sum;
    }
  }

  return result;
}

console.log(convertNumRomano('xcix'));
