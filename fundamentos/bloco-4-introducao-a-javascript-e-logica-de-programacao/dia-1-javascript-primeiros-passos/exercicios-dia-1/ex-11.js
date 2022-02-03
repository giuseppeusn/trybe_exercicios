//----------- Exercicio 11 -----------

const salBruto = 6000;
let salBase;
let salLiq;


//cálculo do salário base com desconto de INSS

if (salBruto <= 1556.94) {
  salBase = salBruto - ((8 / 100) * salBruto);
} else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
  salBase = salBruto - ((9 / 100) * salBruto);
} else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
  salBase = salBruto - ((11 / 100) * salBruto);
} else {
  salBase = salBruto - 570.88;
}

//cálculo do salário líquido com desconto de IR

if (salBase <= 1903.98) {
  salLiq = salBase;
} else if(salBase >= 1903.99 && salBase <= 2826.65) {
  salLiq = salBase - (((7.5 / 100) * salBase) - 142.80);
} else if(salBase >= 2826.66 && salBase <= 3751.05) {
  salLiq = salBase - (((15 / 100) * salBase) - 354.80);
} else if(salBase >= 3751.06 && salBase <= 4664.68) {
  salLiq = salBase - (((22.5 / 100) * salBase) - 636.13);
}  else {
  salLiq = salBase - (((27.5 / 100) * salBase) - 869.36);
}

console.log("O salário líquido é: R$ ", salLiq, "reais");