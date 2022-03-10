const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((item) => name === item);

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Roberto'));