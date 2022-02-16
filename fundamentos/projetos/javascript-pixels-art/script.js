const colorDivs   = document.getElementById('color-palette').children;
const btnClear    = document.getElementById('clear-board');
const btnGenBoard = document.getElementById('generate-board');
const input       = document.getElementById('board-size');
let   pixels      = document.querySelectorAll('.pixel');
let color = 'rgb(0,0,0)';

for (let x in pixels) {
  pixels[x].onclick = changeColor;
}

for (let x in colorDivs) {
  colorDivs[x].onclick = selectColor;
}

btnClear.onclick    = clearBoard;
btnGenBoard.onclick = genBoard;

function selectColor(event) {
  let div = event.target;
  const cssObj = window.getComputedStyle(div, null);
  color = cssObj.getPropertyValue('background-color');
  

  if (div.classList[div.classList.length - 1] != 'selected') {
    for (let x = 0; x < colorDivs.length; x += 1) {
      colorDivs[x].classList.remove('selected');
    }
    div.classList.add("selected");
  }   
}

function changeColor(event) {
  event.target.style.backgroundColor = color;
}

function clearBoard(event) {
  for (let x = 0; x < pixels.length; x += 1) {
    pixels[x].style.backgroundColor = 'white';
  }
}

function genBoard(event) {
  let value = input.value;
  if (value === '') {
    alert('Board inválido!');
    return null
  }

  let board = document.getElementById('pixel-board');
  board.innerHTML = '';

  genLines(value,board);

  pixels = document.querySelectorAll('.pixel');

  for (let x in pixels) {
    pixels[x].onclick = changeColor;
  }
}

function genLines(value,dad){

  if (value < 5) {
    value = 5;
  } else if (value > 50) {
    value = 50;
  }

  for (let x = 0; x < value; x += 1) {
    let line = document.createElement('div');
    line.className = 'line';
    dad.appendChild(line);

    for (let y = 0; y < value; y += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      let lines = document.querySelectorAll('.line');
      lines[x].appendChild(pixel);
    }
  }
}

window.onload = function () {

  let colors = document.querySelectorAll('.color');
  for (let x = 1; x < colors.length; x += 1) {
    // * Source: https://css-tricks.com/snippets/javascript/random-hex-color/
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    colors[x].style.backgroundColor = '#' + randomColor;
  }
}