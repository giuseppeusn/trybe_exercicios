const validate = new window.JustValidate('#form');

validate
  .addField('#input-nome', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Deve conter no mínimo 10 caracteres',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Deve conter no máximo 40 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório!'
    }
  ])
  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório!',
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido!',
    },
  ])
  .addField('#input-desc', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório!',
    }
  ])
  .addField('#datepicker', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório!',
    }  
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
  });


var $min = document.querySelector('.row [name="min"]'),
    $max = document.querySelector('.row [name="max"]');

$min.DatePickerX.init({
  mondayFirst: true,
  format     : 'dd/mm/yyyy',
  minDate    : new Date(2021, 5, 9),
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  weekDayLabels: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
  todayButtonLabel: 'Hoje',
  clearButtonLabel: 'Limpar',
  maxDate    : $max
});

$max.DatePickerX.init({
  mondayFirst: true,
  format     : 'dd/mm/yyyy',
  minDate    : $min,
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  weekDayLabels: ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
  todayButtonLabel: 'Hoje',
  clearButtonLabel: 'Limpar',
  maxDate    : function()
  {
      var date = new Date();
      return new Date().setDate(date.getDate() + 7);
  },
});
