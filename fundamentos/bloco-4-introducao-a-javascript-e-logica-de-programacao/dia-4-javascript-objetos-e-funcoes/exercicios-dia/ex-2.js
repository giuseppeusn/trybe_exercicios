// ----------- Exercicio 1 -----------

function palindromo (word) {
  let arrayWord = word;
  let newWord = word.split('');

  newWord.reverse();

  if(arrayWord === newWord.join('')){
    console.log(true);
  } else {
    console.log(false);
  }

} 

// palindromo('arara');

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
  console.log(maior);
}

// maiorValor([2, 3, 6, 7, 10, 1]);

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
  console.log(menor);
}

// menorValor([2, 4, 6, 7, 10, 0, -3]);

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
  console.log(maior);
}

// contCaract(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

// ----------- Exercicio 5 -----------

function contNum(arrayNum) {
  
}