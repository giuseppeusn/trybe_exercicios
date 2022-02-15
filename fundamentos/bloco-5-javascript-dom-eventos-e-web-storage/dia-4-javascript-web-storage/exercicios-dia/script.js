let bgPick = document.getElementById('bgPicker')
let txtPick = document.getElementById('txtPicker');
let font = document.getElementById('font');
let fontSize = document.getElementById('fontSize');
let spacing = document.getElementById('spacing');
let cfg = document.getElementById('config');
let menu = document.querySelector('table');


let body = document.querySelector('body');
let title = document.querySelector('h2');
let paragraph = document.querySelectorAll('section p');

bgPick.onchange = changeBgColor;
txtPick.onchange = changeTxtColor;
font.onchange = changeFont;
fontSize.onchange = changeFontSize;
spacing.onchange = changeSpacing;
cfg.onclick = openMenu;

initialization();

function changeBgColor(event){
  let color = event.target.value;
  body.style.backgroundColor = color;
  localStorage.setItem('bg-color',color);
}

function changeTxtColor(event) {
  let color = event.target.value;

  paragraph[0].style.color = color;
  title.style.color = color;
  
  localStorage.setItem('txt-color',color);
}

function changeFontSize(event) {
  let size = event.target.value;

  paragraph[0].style.fontSize = size + 'px';
  localStorage.setItem('fontSize',size);
}

function changeSpacing(event) {
  let lineSpacing = event.target.value;

  paragraph[0].style.lineHeight = lineSpacing + 'px';
  localStorage.setItem('lineSpacing',lineSpacing);
}

function changeFont(event) {
  let fontFamily = event.target.value;

  title.style.fontFamily = fontFamily;
  paragraph[0].style.fontFamily = fontFamily;
  localStorage.setItem('font',fontFamily);
}

function openMenu() {
  let visi = menu.style.opacity;
  console.log(visi);

  if(visi == '0') {
    menu.style.opacity = '1';
  } else {
    menu.style.opacity = '0';
  }
  
}

function initialization() {
  let colorBg = localStorage.getItem('bg-color');
  let colorTxt = localStorage.getItem('txt-color');
  let fontFamily = localStorage.getItem('font');
  let size = localStorage.getItem('fontSize');
  let lineHeight = localStorage.getItem('lineSpacing');

  txtPick.value = colorTxt;
  bgPick.value = colorBg;
  font.value = fontFamily;
  fontSize.value = size;
  spacing.value = lineHeight;

  paragraph[0].style.color = colorTxt;
  title.style.color = colorTxt;
  body.style.backgroundColor = colorBg;
  paragraph[0].style.fontFamily = fontFamily;
  title.style.fontFamily = fontFamily;
  paragraph[0].style.fontSize = size + 'px';
  paragraph[0].style.lineHeight = lineHeight + 'px';

}