const imc = require('./imc');
const readline = require('readline-sync');

const imcType = (calculatedImc) => {
  switch(true) {
    case calculatedImc < 18.5:
      return 'Abaixo do peso';
    case calculatedImc <= 24.9:
      return 'Peso normal';
    case calculatedImc <= 29.9:
      return 'Acima do peso';
    case calculatedImc <= 34.9:
      return 'Obesidade grau I';
    case calculatedImc <= 39.9:
      return 'Obesidade grau II';
    case calculatedImc >= 40:
      return 'Obesidade grau III e IV';
    default:
      return 'Valor inválido';
  }
}

const main = () => {
  const userWeight = readline.questionFloat('Qual e o seu peso?');
  const userHeight = readline.questionInt('Qual e a sua altura em centimetros?');

  const calculatedImc = imc(userWeight, userHeight);

  

  console.log(`\nPeso: ${userWeight} | Altura: ${userHeight}`);
  console.log(`O seu IMC é ${calculatedImc} (${imcType(calculatedImc)})`);
}

main();