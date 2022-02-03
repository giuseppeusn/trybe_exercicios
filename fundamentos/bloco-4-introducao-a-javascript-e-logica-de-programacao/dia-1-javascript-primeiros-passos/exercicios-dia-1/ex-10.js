//----------- Exercicio 10 -----------

const produto = 3;
const venda = 8;

const valorCusto = produto + ((20 / 100) * produto);
const lucro = venda - valorCusto;

if (produto < 0 || venda < 0) {
  console.log("Erro! Valor deve ser maior que 0");
} else {
  console.log("Empresa terá lucro de: R$ ", lucro, "reais");
}