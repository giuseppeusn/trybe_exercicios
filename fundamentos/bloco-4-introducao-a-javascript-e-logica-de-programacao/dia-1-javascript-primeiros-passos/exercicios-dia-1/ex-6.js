//----------- Exercicio 6 -----------

const x = "REI";
const peca = x.toLowerCase();


if (peca ===  "rei") {
  console.log("Move-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
} else if (peca ===  "rainha") {
  console.log("Move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
} else if (peca === "bispo") {
  console.log("Move-se ao longo da diagonal. Não pode pular outras peças.");
} else if (peca ===  "cavalo") {
  console.log("Move-se em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa. Pode pular peças");
} else if (peca ===  "torre") {
  console.log("Move-se pela vertical ou horizontal, mas não pode pular outras peças.");
} else if (peca ===  "peao") {
  console.log("Move-se apenas uma casa para frente e somente captura outras peças na diagonal.");
} else {
  console.log("Erro! Peça inválida")
}
