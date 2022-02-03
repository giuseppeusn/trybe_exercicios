// ---------- Exercicio 1 ----------

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let x = 1; x < numbers.length; x += 1) {
  for (let y = 0; y < x; y += 1) {
    if (numbers[x] < numbers[y]) {
      let position = numbers[x];
      numbers[x] = numbers[y];
      numbers[y] = position;
    }
  }
}

for (x of numbers) {
  //console.log(x);
}

// ---------- Exercicio 2 ----------

for (let x = 1; x < numbers.length; x += 1) {
  for (let y = 0; y < x; y += 1) {
    if (numbers[x] > numbers[y]) {
      let position = numbers[x];
      numbers[x] = numbers[y];
      numbers[y] = position;
    }
  }
}

for (y of numbers) {
  //console.log(y);
}

// ---------- Exercicio 3 ----------

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = [];
let secondIndex = 0;

for (let index = 1; index < numbers.length + 1; index += 1) {
  for (secondIndex; secondIndex < index; secondIndex += 1) {
    if (index === numbers2.length) {
      newNumbers.push(numbers2[index - 1] * 2);  
    } else {
      newNumbers.push(numbers2[index] * numbers2[secondIndex]); 
    }  
  }
}

for (z of newNumbers) {
  console.log(z);
}