const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const newArray = () => products.map((item, index) => ( { [item]: prices[index] } )); 

console.log(newArray());