function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  array.sort();
  let tecnologias = [{}];

  for (let x in array) {
    tecnologias[x] = {
      tech: array[x],
      name,
    };
  }
  return tecnologias;
}

module.exports = { techList };