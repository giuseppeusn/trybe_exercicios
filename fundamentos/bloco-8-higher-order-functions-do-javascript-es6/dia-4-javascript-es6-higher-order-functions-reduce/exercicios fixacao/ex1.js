const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//Solução 1

const verifyPair = (num) => num % 2 === 0 ? num : 0;

const sumPair = () => {
  return numbers.reduce((acc, number) =>{
    let num = verifyPair(number);

    return acc + num;
  })
}

console.log(sumPair());

//Solução 2

const verifyPair2 = (num) => num % 2 === 0;

const sumPair2 = (acc, number) => acc + number;

const result = (arr) => arr.filter(verifyPair2).reduce(sumPair2);

console.log(result(numbers, 0));