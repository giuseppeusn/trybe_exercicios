document.querySelector('#container').style.backgroundColor = 'rgb(42,42,42)';

document.querySelector('#header-container').style.backgroundColor = 'rgb(16, 135, 39)';

document.querySelector('.emergency-tasks').style.backgroundColor = 'rgb(247, 191, 7)';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'rgb(129, 247, 152)';

document.getElementById('footer-container').style.backgroundColor = 'rgb(4, 74, 18)';

let array = document.querySelectorAll('h3');

for (x in array) {
  array[x].style.backgroundColor = 'black';
}