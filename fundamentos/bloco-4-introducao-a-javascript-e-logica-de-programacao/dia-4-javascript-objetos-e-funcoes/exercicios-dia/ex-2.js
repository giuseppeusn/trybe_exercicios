// ----------- Exercicio 1 -----------

function palindromo (word) {
  let arrayWord = word;
  let newWord = word.split('');

  newWord.reverse();

  if(arrayWord === newWord.join('')){
    return true;
  }

  return false;
} 

// console.log(palindromo('arara'));

// ----------- Exercicio 2 -----------

function maiorValor (arrayNum) {
  let array = [0];
  let maior = 0;

  for (x in arrayNum){
    if (arrayNum[x] > array[array.length - 1]) {
      array[x] = arrayNum[x];
      maior = x;
    }
  }
  return maior
}

// console.log(maiorValor([2, 3, 6, 7, 10, 1]));

// ----------- Exercicio 3 -----------

function menorValor (arrayNum) {
  let array = [0];
  let menor = 0;

  for (x in arrayNum){
    if (arrayNum[x] < array[array.length - 1]) {
      array[x] = arrayNum[x];
      menor = x;
    }
  }
  return menor;
}

// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

// ----------- Exercicio 4 -----------

function contCaract(arrayWords) {
  let maior = '';
  let cont = [0];

  for (x in arrayWords) {
    let word = arrayWords[x].split('');
  
    if (word.length > cont[cont.length - 1]) {
      cont[x] = word.length;
      maior = word.join('');
    }
  }
  return maior;
}

// console.log(contCaract(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// ----------- Exercicio 5 -----------

function contNum(arrayNum) {
  let maior = 0;
  let cont = {};

  arrayNum.forEach(function(x) { cont[x] = (cont[x] || 0)+1; });

  for (x in cont) {
    if(cont[x] > maior) {
      maior = x;
    } 
  }

  return maior;
}

// console.log(contNum([2, 3, 2, 5, 8, 2, 3]));

// ----------- Exercicio 6 -----------

function sumNum(num) {
  let sum = 0;

  for (let x = 1; x <= num; x += 1) {
    sum += x;
  }

  return sum;
}

// console.log(sumNum(5));

// ----------- Exercicio 7 -----------