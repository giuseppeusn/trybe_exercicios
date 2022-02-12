function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// --------- Exercicio 1 ---------

function createDays() {
  let days = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysList = document.getElementById('days');

  for (x in days) {
    let li = document.createElement('li');
    daysList.appendChild(li);
    li.className = 'day';
    
    if (days[x] == 24 || days[x] == 25 || days[x] == 31) {
      li.classList.add('holiday');
    } 
    
    if (days[x] == 4 || days[x] == 11 || days[x] == 18 || days[x] == 25 ) {
      li.classList.add('friday');
    } 

    li.innerText = days[x];
  }
}

createDays();


// --------- Exercicio 2 ---------

let btnHoliday = document.createElement('button');
let btnContainer = document.querySelector('.buttons-container');

function createHoliday(string) {
  btnHoliday.innerText = string;
  btnHoliday.setAttribute('id','btn-holiday');
  btnContainer.appendChild(btnHoliday);
}

createHoliday('Feriados');


// --------- Exercicio 3 ---------

btnHoliday.addEventListener('click',changeHolidays);

function changeHolidays(event) {
  let day = document.querySelectorAll('.holiday');
  for (x in day) {
    if (day[x].style.backgroundColor == 'red') {
      day[x].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      day[x].style.backgroundColor = 'red';
    }
  }
}


// --------- Exercicio 4 ---------

let btnSextou = document.createElement('button');

function createSextou(string) {
  btnSextou.innerText = string;
  btnSextou.setAttribute('id','btn-friday');
  btnContainer.appendChild(btnSextou);
}

createSextou('Sexta-feira');


// --------- Exercicio 5 ---------

btnSextou.addEventListener('click',changeFriday);
let friday = document.querySelectorAll('.friday');
let backupNum = [];

for (x in friday) {
  backupNum.push(friday[x].innerText);
}

function changeFriday() {
  for (x in friday) {   
    if (friday[x].innerText != 'Sextou!') {
      friday[x].innerText = 'Sextou!'
    } else {
      friday[x].innerText = backupNum[x];
    }
  }
}


// --------- Exercicio 6 --------- 

let day = document.querySelectorAll('.day');
let stats = true;

for (let x = 1; x < day.length; x += 1) {
  day[x].addEventListener('mouseover',hoverDay);
  day[x].addEventListener('mouseout',hoverDay);
  day[x].addEventListener('click',addEvent);
}

function hoverDay(event) {
  let size = event.target.style.fontSize;
  if (stats) {
    event.target.style.fontSize = '180%';
    stats = false;
  } else {
    event.target.style.fontSize = '125%';
    stats = true;
  }
}

// --------- Exercicio 7 --------- 

let myTasks = document.querySelector('.my-tasks')

let btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click',addTasks);

function addTasks() {
  let input = document.querySelector('#task-input');
  let task = document.createElement('span');
  
  myTasks.appendChild(task);
  task.innerText = ' ' + input.value;

  let color = Math.floor(Math.random()*16777215).toString(16);
  
  taskColor(color);
}

// --------- Exercicio 8 --------- 

function taskColor(color) {
  let newDiv = document.createElement('div');
  newDiv.className = 'task';
  myTasks.appendChild(newDiv);
  newDiv.style.backgroundColor = '#' + color;

  newDiv.addEventListener('click',selectedTask);
}

// --------- Exercicio 9 --------- 

function selectedTask(event) {
  event.target.classList.add('selected');
}

// --------- Exercicio 10 --------- 

function addEvent(event) {
  let color = document.querySelector('.selected').style.backgroundColor;

  let list = event.target.classList;
  let length = list.length;

  if(list[length - 1] === 'colored') {
    event.target.style.color = 'rgb(119,119,119)';
    list.remove('colored');
  } else {
    event.target.style.color = color ;
    list.add('colored');
  }
}