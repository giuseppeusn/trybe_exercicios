const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// --------- Exercicio 1 ---------

// O primeiro quadrado está maior, pois ele tem uma classe diferente das demais

// --------- Exercicio 2 ---------

let li = document.querySelectorAll('li');


li[0].addEventListener('click',addClass);
li[1].addEventListener('click',addClass);
li[2].addEventListener('click',addClass);

function addClass(who) {
  for (x in li) {
    if (li[x].className === 'tech') {
      li[x].classList.remove('tech');
    }
  }
  who.target.className = 'tech';
}

// --------- Exercicio 3 ---------

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

let ipt = document.getElementById('input');

ipt.addEventListener('change',inserTxt);

function inserTxt(event) {
  let tech = document.querySelectorAll('.tech');
  tech[0].innerText = event.target.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.