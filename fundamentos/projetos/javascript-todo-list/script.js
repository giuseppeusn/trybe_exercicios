const input    = document.getElementById('texto-tarefa');
const btnAdd   = document.getElementById('criar-tarefa');
const btnRmAll = document.getElementById('apaga-tudo');
const btnRmFin = document.getElementById('remover-finalizados');
const btnSalv  = document.getElementById('salvar-tarefas');
const btnCima  = document.getElementById('mover-cima');
const btnBaixo = document.getElementById('mover-baixo');
const btnRm    = document.getElementById('remover-selecionado');
const list     = document.getElementById('lista-tarefas');

btnAdd.onclick = function (){
  let txt    = input.value;
  let tarefa = document.createElement('li');

  tarefa.innerText = txt;
  list.appendChild(tarefa);
  input.value = '';

  tarefa.onclick    = changeBgColor;
  tarefa.ondblclick = completeTask;
}

btnRmAll.onclick = function () {
  list.innerHTML = '';
}

btnRmFin.onclick = function () {
  let elem = document.querySelectorAll('.completed');

  for (let x = 0; x < elem.length; x+=1) {
    elem[x].remove();
  }
}

btnSalv.onclick = function () {
  let item = [];

  for (let x = 0; x < list.children.length; x += 1) {
   
    item.push(list.children[x].outerHTML);
  }

  localStorage.setItem('list',JSON.stringify(item));
}

btnCima.onclick = function () {
  let elem = document.getElementsByClassName('selected')[0];
  
  if (elem === undefined) {
    return;
  } else if (elem.previousElementSibling === null) {
    return;
  }

  let elemC    = elem.classList;
  let elemTxt  = elem.innerText;
  let prevElem = elem.previousElementSibling;
  let prevTxt  = prevElem.innerText;

  prevElem.innerText  = elemTxt;
  prevElem.className += elemC;
  elem.innerText      = prevTxt;
  elem.classList.toggle('selected');
}

btnBaixo.onclick = function () {
  let elem = document.getElementsByClassName('selected')[0];

  if (elem === undefined) {
    return;
  } else if (elem.nextElementSibling === null) {
    return;
  }

  let elemC    = elem.classList;
  let elemTxt  = elem.innerText;
  let nextElem = elem.nextElementSibling;
  let nextTxt  = nextElem.innerText;

  nextElem.innerText = elemTxt;
  nextElem.className += elemC;
  elem.innerText = nextTxt;
  elem.classList.toggle('selected');
}

btnRm.onclick = function () {
  let elem = document.getElementsByClassName('selected')[0];

  if (elem === undefined) {
    return;
  }

  elem.remove();
}

function changeBgColor(event) {
  let li = event.target;

  for (x in list.children) {
    for (y in list.children[x].classList)
    if (list.children[x].classList[y] == 'selected') {
      list.children[x].classList.toggle('selected');
    }
  }  

  li.classList.toggle('selected');
}

function completeTask(event) {
  let li = event.target;
  let classL = li.classList;

  classL.toggle("completed");
}

window.onload = function () {
  let items = JSON.parse(localStorage.getItem('list'));
  
  for (let x in items) {
    list.innerHTML += items[x];
  }

  for (let x in list.children) {
    list.children[x].onclick = changeBgColor;
    list.children[x].ondblclick = completeTask;
  }

}