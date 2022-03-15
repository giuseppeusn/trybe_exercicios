// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Laranja', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Suco de laranja', 'Gelatina'];

const fruitSalad = (fruit, additional) => {
  return salad = [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));