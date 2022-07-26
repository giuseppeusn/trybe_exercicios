const mainImc = require('../calculadora-imc');
const mainAvgCar = require('../calculadora-velocidade-media-carro');
const mainRaffle = require('../jogo_adivinhacao');
const readline = require('readline-sync');

const main = () => {
  console.log(`
  ______________________________________
  | 1 - Calculadora de IMC              |
  | 2 - Calculadora de velocidade media |
  | 3 - Jogo de advinhacao              |
  |_____________________________________|
  `);

  const answer = readline.questionInt('\nQual script voce quer utilizar?')

  switch(answer) {
    case 1:
      mainImc();
      break;
    case 2:
      mainAvgCar();
      break;
    case 3:
      mainRaffle();
      break;
    default:
      console.log('\nOpção inválida');
      setTimeout(() => main(), 1500);
      break;
  }
}

main();