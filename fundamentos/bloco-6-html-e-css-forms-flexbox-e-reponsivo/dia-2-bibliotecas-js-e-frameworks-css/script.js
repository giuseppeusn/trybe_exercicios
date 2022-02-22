const submit = document.getElementById('enviar');
const clean = document.getElementById('limpar');
const form = document.querySelector('form');


function prevent(event) {
  event.preventDefault();
}

function cleanForm(params) {
  form.reset();
}

submit.onclick = prevent;
clean.onclick = cleanForm;

var $min = document.querySelector('.row [name="min"]'),
    $max = document.querySelector('.row [name="max"]');

$min.DatePickerX.init({
  mondayFirst: true,
  format     : 'dd/mm/yyyy',
  minDate    : new Date(2021, 5, 9),
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  weekDayLabels: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
  maxDate    : $max
});

$max.DatePickerX.init({
  mondayFirst: true,
  format     : 'dd/mm/yyyy',
  minDate    : $min,
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  weekDayLabels: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
  maxDate    : function()
  {
      var date = new Date();
      return new Date().setDate(date.getDate() + 7);
  },
});
