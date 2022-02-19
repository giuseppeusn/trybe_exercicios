const input = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const upload = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const container = document.getElementById('meme-image-container');
const memes = document.getElementsByClassName('buttons-meme')[0].children;

function changeImg(event) {
  img.src = event.target.src;
}

for (let x = 0; x < memes.length; x += 1) {
  memes[x].onclick = changeImg;
}

input.onkeyup = () => {
  text.innerText = input.value;
};

function insertImg(event) {
  img.src = URL.createObjectURL(event.target.files[0]);
}

upload.onchange = insertImg;

btnFire.onclick = () => {
  container.style.border = '3px dashed red';
};

btnWater.onclick = () => {
  container.style.border = '5px double blue';
};

btnEarth.onclick = () => {
  container.style.border = '6px groove green';
};
