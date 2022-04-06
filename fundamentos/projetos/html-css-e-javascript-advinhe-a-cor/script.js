const balls = document.querySelectorAll('.ball');
const textColor = document.getElementById('rgb-color');
const btnReset = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const scoreTxt = document.getElementById('score');

let score = 0;

function verifyAnswer(event) {
  const ball = event.target;
  const color = ball.style.backgroundColor.replace('rgb', '');

  if (color === textColor.innerText) {
    answer.innerText = 'Acertou!';
    score += 3;
    scoreTxt.innerText = `Pontos: ${score}`;
    localStorage.setItem('score', score);
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

for (let x = 0; x < balls.length; x += 1) {
  balls[x].onclick = verifyAnswer;
}

function addColor() {
  for (let x = 0; x < balls.length; x += 1) {
    const r = Math.floor(Math.random() * (255 - 0));
    const g = Math.floor(Math.random() * (255 - 0));
    const b = Math.floor(Math.random() * (255 - 0));

    balls[x].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  const position = Math.floor(Math.random() * (5 - 0));

  let color = balls[position].style.backgroundColor;
  color = color.replace('rgb', '');
  textColor.innerText = color;
}

btnReset.onclick = () => {
  addColor();

  answer.innerText = 'Escolha uma cor';
};

window.onload = () => {
  addColor();
  const savedScore = localStorage.getItem('score');
  if (savedScore != null) {
    scoreTxt.innerText = `Pontos: ${savedScore}`;
    score = Number(savedScore);
  }
};
