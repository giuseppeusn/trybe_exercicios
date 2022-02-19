const btnCrt = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const parag = document.getElementById('carta-gerada');
const cont = document.getElementById('carta-contador');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const slope = ['skewleft', 'skewright'];

function changeStyle(event) {
  const elem = event.target;

  const styleClass = style[Math.floor(Math.random() * style.length)];
  const sizeClass = size[Math.floor(Math.random() * size.length)];
  const rotateClass = rotate[Math.floor(Math.random() * rotate.length)];
  const slopeClass = slope[Math.floor(Math.random() * slope.length)];

  elem.className = `${styleClass} ${sizeClass} ${rotateClass} ${slopeClass}`;
}

function styleWords() {
  const words = document.querySelectorAll('span');
  for (let x = 0; x < words.length; x += 1) {
    const styleClass = style[Math.floor(Math.random() * style.length)];
    const sizeClass = size[Math.floor(Math.random() * size.length)];
    const rotateClass = rotate[Math.floor(Math.random() * rotate.length)];
    const slopeClass = slope[Math.floor(Math.random() * slope.length)];
    words[x].onclick = changeStyle;
    words[x].className = `${styleClass} ${sizeClass} ${rotateClass} ${slopeClass}`;
  }
}

btnCrt.onclick = () => {
  const word = input.value.split(' ');
  let letter = '';

  if (input.value === '' || !input.value.trim().length) {
    parag.innerText = 'Por favor, digite o conteúdo da carta.';
    cont.innerText = 0;
    return;
  }

  for (let x = 0; x < word.length; x += 1) {
    letter += `<span>${word[x]}</span>`;
  }

  parag.innerHTML = letter;

  cont.innerText = word.length;

  styleWords();
};
