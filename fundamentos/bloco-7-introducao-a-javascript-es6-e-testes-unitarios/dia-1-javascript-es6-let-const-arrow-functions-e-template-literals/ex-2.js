// ------------ Exercício 1 ------------

const fatorial = (num) => {
  let array = [];

  for (let x = num; x > 0; x -= 1) {
    array.push(x);
  }

  let fat = array[0];

  for (let x = 0; x < array.length - 1; x += 1) {
    fat *= array[x + 1];
  }

  return fat
}

console.log(fatorial(10));

// ------------ Exercício 1 (bônus) ------------

const fatorial2 = num => num > 1 ? num * fatorial2(num - 1) : 1;

console.log(fatorial2(4));

// ------------ Exercício 2 ------------

const longestWord = word => {
  const wordArray = word.split(' ');
  let maior = '';

  for (let x in wordArray) {
    maior.length < wordArray[x].length ? maior = wordArray[x] : null;
  }

  return maior;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));