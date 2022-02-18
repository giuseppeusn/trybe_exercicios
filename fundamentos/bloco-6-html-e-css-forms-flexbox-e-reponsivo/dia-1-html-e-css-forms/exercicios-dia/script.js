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