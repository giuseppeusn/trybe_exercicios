// ----------- Exercicio 1 -----------

let player = {
  name: 'Marta',
  lastName: 'Silva',
  ag: 34,
  medals: { golden: 2, silver: 3 }
};

// ----------- Exercicio 2 -----------

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.ag + ' anos de idade');

// ----------- Exercicio 3 -----------

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// ----------- Exercicio 3 -----------

console.log('A jogadora Marta Silva foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

// ----------- Exercicio 4 -----------

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');