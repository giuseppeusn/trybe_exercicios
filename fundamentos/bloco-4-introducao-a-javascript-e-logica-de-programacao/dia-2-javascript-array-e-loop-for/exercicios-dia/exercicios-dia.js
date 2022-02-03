let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// ---------- Exercicio 1 ----------

for (let x = 0; x < numbers.length; x += 1) {
  //console.log(numbers[x]);
}

// ---------- Exercicio 2 ----------

let sum = 0;

for (let x = 0; x < numbers.length; x += 1) {
  sum = sum + numbers[x];
}

//console.log(sum);

// ---------- Exercicio 3 ----------

let media = 0;
let soma = 0;

for (let x = 0; x < numbers.length; x += 1) {
  soma = soma + numbers[x];
}

media = soma / numbers.length;

//console.log(media);

// ---------- Exercicio 4 ----------

let msg;

if (media > 20) {
  msg = 'valor maior que 20';
} else {
  msg = 'valor menor que 20'
}

//console.log(msg);

// ---------- Exercicio 5 ----------

let maior = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
   if (numbers[i] > maior) {
      maior = numbers[i];
   }
}

//console.log(maior);

// ---------- Exercicio 6 ----------

let sum1 = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) {
    sum1 = sum1 + 1;
  } 
  
  if (sum === 0) {
    console.log('nenhum valor ímpar encontrado');
  }
}

//console.log(sum1);


// ---------- Exercicio 7 ----------

let menor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
   if (numbers[i] < menor) {
      menor = numbers[i];
   }
}

//console.log(menor);

// ---------- Exercicio 8 ----------

let myArray = [];

for (let x = 1; x <= 25; x += 1) {
  myArray.push(x);
}

for (y of myArray) {
  //console.log(y);
}

// ---------- Exercicio 9 ----------

let result = 0;

for (y of myArray) {
  result = y/2;
  console.log(result);
}