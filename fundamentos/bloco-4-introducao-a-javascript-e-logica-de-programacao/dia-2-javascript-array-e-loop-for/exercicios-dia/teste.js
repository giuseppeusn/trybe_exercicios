
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let secondIndex = 0;

for (let index = 1; index < numbers.length + 1; index += 1) {
  for (secondIndex; secondIndex < index; secondIndex += 1) {
    if (index === numbers.length) {
      newNumbers.push(numbers[index - 1] * 2);  
    } else {
      newNumbers.push(numbers[index] * numbers[secondIndex]); 
    }  
  }
}

for (z of newNumbers) {
  console.log(z);
}