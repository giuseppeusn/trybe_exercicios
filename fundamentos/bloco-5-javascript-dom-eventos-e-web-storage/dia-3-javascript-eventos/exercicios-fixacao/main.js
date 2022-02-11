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

// --------- Exercicio 4 ---------

let text = document.getElementById('my-spotrybefy');

text.addEventListener('dblclick',redirect);

function redirect(event) {
  window.open('https://github.com/giuseppeusn');
}

// --------- Exercicio 5 ---------

text.addEventListener('mouseover',changeColorGreen);
text.addEventListener('mouseout',changeColorDefault);

function changeColorGreen(event) {
  event.target.style.color = 'rgb(47, 193, 140)';
}

function changeColorDefault(event) {
  event.target.style.color = 'white';
}