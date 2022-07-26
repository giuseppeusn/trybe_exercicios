const random = require('./raffle');
const readline = require('readline-sync');

const menu = () => {
  const answer = readline.question('\nQuer jogar novamente? y/n');

  if (answer === 'y') {
    main();
  }
}

const main = () => {
  const value = readline.questionInt('\nQual e seu chute de numero?');
  const randomValue = random();

  if (value === randomValue) {
    console.log('\nParabens, numero correto!');
  } else {
    console.log(`\nOpa, não foi dessa vez. O número era ${randomValue}`);
  }

  menu();
}

main();