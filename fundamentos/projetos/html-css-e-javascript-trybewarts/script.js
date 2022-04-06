const buttomLogin = document.getElementById('buttom-login');
const email = document.getElementById('email');
const password = document.getElementById('password');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const form = document.getElementById('evaluation-form');

const inpNome = document.getElementById('input-name');
const inpSobrenome = document.getElementById('input-lastname');
const inpEmail = document.getElementById('input-email');
const inpHouse = document.getElementById('house');
const inpComment = document.getElementById('textarea');

function setMat() {
  const materias = document.querySelectorAll('input[name="content"]:checked');
  const matValues = [];

  for (let x = 0; x < materias.length; x += 1) {
    matValues.push(` ${materias[x].value}`);
  }

  return matValues;
}

function setValues() {
  const family = document.querySelector('input[name="family"]:checked');
  const avalia = document.querySelector('input[name="rate"]:checked');
  const matValues = setMat();

  form.innerHTML = `
    Nome: ${inpNome.value} ${inpSobrenome.value}
    <br>
    Email: ${inpEmail.value}
    <br>
    Casa: ${inpHouse.value}
    <br>
    Família: ${family.value}
    <br>
    Matérias: ${matValues}
    <br>
    Avaliação: ${avalia.value}
    <br>
    Observações: ${inpComment.value}`;
}

submitBtn.onclick = function btn(event) {
  event.preventDefault();
  setValues();
};

textArea.onkeyup = () => {
  const character = 500;
  counter.innerText = character - textArea.value.length;
};

function verifLogin(event) {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    console.log('passou');
    return alert('Olá, Tryber!');
  }

  event.preventDefault();
  return alert('Email ou senha inválidos.');
}

buttomLogin.onclick = verifLogin;

window.onload = () => {
  submitBtn.disabled = true;
};

function enableBtn() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreement.onclick = enableBtn;

const hp = new Audio('123.mp3');
hp.play();
