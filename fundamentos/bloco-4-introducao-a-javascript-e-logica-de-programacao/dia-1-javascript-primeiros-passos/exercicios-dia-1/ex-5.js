//----------- Exercicio 5 -----------

const x = 101;
const y = 45;
const z = -34;

if ((x + y + z ) === 180) {
  console.log(true);
} else if (x < 0 || y < 0 || z < 0) {
  console.log("Inválido");
} else {
  console.log(false);
}