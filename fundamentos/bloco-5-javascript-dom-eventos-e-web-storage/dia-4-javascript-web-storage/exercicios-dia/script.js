let bgPick = document.getElementById('bgPicker')
let txtPick = document.getElementById('txtPicker');
let font = document.getElementById('font');
let fontSize = document.getElementById('fontSize');
let spacing = document.getElementById('spacing');


let body = document.querySelector('body');
let paragraph = document.querySelectorAll('p');

bgPick.onchange = changeBgColor;
txtPick.onchange = changeTxtColor;
font.onchange = changeFont;
fontSize.onchange = changeFontSize;
spacing.onchange = changeSpacing;

initialization();

function changeBgColor(event){
  let color = event.target.value;
  body.style.backgroundColor = color;
  localStorage.setItem('bg-color',color);
}

function changeTxtColor(event) {
  let color = event.target.value;

  for (let x = 0; x < paragraph.length; x += 1) {
    paragraph[x].style.color = color;
  }
  
  localStorage.setItem('txt-color',color);
}

function changeFontSize(event) {
  let size = event.target.value;

  paragraph[paragraph.length - 1].style.fontSize = size + 'px';
  localStorage.setItem('fontSize',size);
}

function changeSpacing(event) {
  let lineSpacing = event.target.value;

  paragraph[paragraph.length - 1].style.lineHeight = lineSpacing + 'px';
  localStorage.setItem('lineSpacing',lineSpacing);
}

function changeFont(event) {
  let fontFamily = event.target.value;

  paragraph[paragraph.length - 1].style.fontFamily = fontFamily;
  localStorage.setItem('font',fontFamily);
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

  for (let x = 0; x < paragraph.length; x += 1) {
    paragraph[x].style.color = colorTxt;
  }

  body.style.backgroundColor = colorBg;
  paragraph[paragraph.length - 1].style.fontFamily = fontFamily;
  paragraph[paragraph.length - 1].style.fontSize = size + 'px';
  paragraph[paragraph.length - 1].style.lineHeight = lineHeight + 'px';

}