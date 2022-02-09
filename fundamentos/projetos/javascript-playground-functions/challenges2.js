// Desafio 11
function generatePhoneNumber(array) {
  let cont = {};
  let dupli = false;
  let arrayNum = [];

  if(array.length != 11) {
    return "Array com tamanho incorreto.";
  } 

  //* Source: https://www.codegrepper.com/code-examples/javascript/how+to+count+duplicates+in+an+array+javascript
  array.forEach(function(x) { cont[x] = (cont[x] || 0)+1; });

  for (x in cont) {
    if( cont[x] >= 3) {
      dupli = true;
    } 
  }
  
  for (let x in array) {
    if (array[x] > 9 || array[x] < 0 || dupli) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let x = 2; x <= array.length; x += 1) {
    if (x === 7) {
      arrayNum.push('-');
      arrayNum.push(array[x]);
    } else {
      arrayNum.push(array[x]);
    }
  }

  let phoneNumber = '(' + array[0].toString() + array[1].toString() + ')' + ' ' + arrayNum.join('');

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let numbers = [];
  let maior = 0;
  let indMaior = 0;
  let sum = 0;

  numbers.push(lineA,lineB,lineC);

  for (let i = 0; i < numbers.length; i += 1) {
     if (numbers[i] > maior) {
        maior = numbers[i];
        indMaior = i;
     }
  }

  numbers[indMaior] = 0;

  for (x in numbers) {
    sum += numbers[x];
  }

  if (maior > sum) {
    return false;
  }

  return true;
}

// Desafio 13
function hydrate(text) {

  //* Source: https://stackoverflow.com/a/14164576
  let number = text.match(/\d/g);
  let sum = 0;

  for (x in number) {
    sum += parseInt(number[x]);
  }
  
  if (sum === 1) {
    return sum + ' copo de água'
  }

  return sum + ' copos de água'
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
