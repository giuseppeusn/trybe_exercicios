let n = 5;

// ----------- Exercicio 1 -----------

for (let y = 0; y < n; y += 1) {
  let linha = [];
  for (let x = 0; x < n; x += 1) {
    linha[x] = '*';
  }
  // console.log(linha.join(""));
}

// ----------- Exercicio 2 -----------

let z = n - 1;

for (let y = 0; y < n; y += 1) {
  let linha = [];
  for (let x = 0; x < n - z; x += 1) {  
    linha[x] = '*';
  }
  z -= 1;
  // console.log(linha.join(""));
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
  // console.log(linha.join(""));
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
  // console.log(linha.join(""));
}

// ----------- Exercicio 5 -----------

if (n % 2 == 1) {
} else {
  console.log('Número deve ser ímpar');
}

