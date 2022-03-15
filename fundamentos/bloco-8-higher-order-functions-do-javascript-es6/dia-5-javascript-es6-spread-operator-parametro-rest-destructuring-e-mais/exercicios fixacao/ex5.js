let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares);

// Utilize array destructuring para produzir o resultado esperado pelo console.log

[,,, ...numerosPares ] = numerosPares;

console.log(numerosPares);