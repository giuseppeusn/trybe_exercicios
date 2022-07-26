const imc = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
}

module.exports = imc;