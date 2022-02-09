let n = 5;

// ----------- Exercicio 1 -----------

for (let y = 0; y < n; y += 1) {
  let linha = [];
  for (let x = 0; x < n; x += 1) {
    linha[x] = '*';
  }
  console.log(linha.join(""));
}

// ----------- Exercicio 2 -----------

let z = n - 1;

for (let y = 0; y < n; y += 1) {
  let linha = [];
  for (let x = 0; x < n - z; x += 1) {  
    linha[x] = '*';
  }
  z -= 1;
  console.log(linha.join(""));
}

// ----------- Exercicio 3 -----------

for (let y = 0; y < n; y += 1) {
  let linha = [];
  let b = 1;
  for (let x = 0; x < n; x += 1) {  
    if (y < n - b) {
      linha[x] = ' ';
    } else {
      linha[x] = '*';
    }    
    b += 1;
  }
  console.log(linha.join(""));
}

// ----------- Exercicio 4 -----------

let elem = (n/2 + .5);


for (let y = 0; y < (n/2 + .5); y += 1) {
  let linha = [];
  let b = (n/2 - .5); 
  for (let x = 0; x < elem; x += 1) {  
    if (y < b) {
      linha[x] = ' ';
    } else {
      linha[x] = '*';
    }
    b -= 1;
  }
  elem += 1;
  console.log(linha.join(""));
}

// ----------- Exercicio 5 -----------

let meio = (n + 1) / 2;
let esq = meio;
let dir = meio;

if (n % 2 == 1) {
  for (let y = 1; y <= meio; y += 1) {
    let linha = [];
    for (let x = 1; x <= n; x += 1) {  
      if (x == esq || x == dir || y == meio) {
        linha[x] = '*';
      } else {
        linha[x] = ' ';
      }
    }
    esq -= 1;
    dir += 1;
    console.log(linha.join(""));
  }
} else {
  console.log('Número deve ser ímpar');
}

// ----------- Exercicio 6 -----------

let num = 97;
let primo = true;

for (let x = 0; x <= num; x += 1) {
  for (let y = 2; y < x; y += 1) {
    if (num % y === 0) {
      primo = false;
    } 
  }
}

primo == true ? console.log(num + ' é primo') : console.log(num + ' não é primo');