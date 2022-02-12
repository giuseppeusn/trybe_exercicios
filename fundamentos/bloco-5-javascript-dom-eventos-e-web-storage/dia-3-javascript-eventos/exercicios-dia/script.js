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

function createSextou(string) {
  let btnHoliday = document.createElement('button');
  btnHoliday.innerText = string;
  let btnContainer = document.querySelector('.buttons-container');
  btnHoliday.setAttribute('id','btn-holiday');
  btnContainer.appendChild(btnHoliday);
}

createSextou('Feriados');


// --------- Exercicio 3 ---------

