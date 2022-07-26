const avgTime = require('./velocity');
const readline = require('readline-sync');

const main = () => {
  const userDistance = readline.questionInt('Qual e a distancia percorrida em metros?');
  const userTime = readline.questionInt('Qual e o tempo do percurso em segundos?');

  console.log(`Distância: ${userDistance}m | Tempo: ${userTime}s`);
  console.log(`Velocidade média do carro: ${avgTime(userDistance, userTime)}m/s`);
}

main();