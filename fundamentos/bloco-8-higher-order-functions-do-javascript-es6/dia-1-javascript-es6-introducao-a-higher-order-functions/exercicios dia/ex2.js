const result = (value1,value2) => value1 === value2;


const giveaway = (num,callback) => {
  const rnd = Math.floor((Math.random() * 5) + 1);

  return callback(rnd, num) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(giveaway(1,result));