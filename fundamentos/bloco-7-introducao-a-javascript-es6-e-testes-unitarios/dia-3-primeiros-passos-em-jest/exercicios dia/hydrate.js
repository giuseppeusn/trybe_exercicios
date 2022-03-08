function hydrate(text) {
  const number = text.match(/\d/g);
  let sum = 0;

  for (let x in number) {
    sum += parseInt(number[x]);
  }
  
  if (sum === 1) {
    return `${sum} copo de água`;
  }

  return `${sum} copos de água`;
}

module.exports = { hydrate };