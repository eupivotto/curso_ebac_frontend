const form = document.getElementById('form-numbers');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const valueA = document.getElementById('campo-a').value;
  const valueB = document.getElementById('campo-b').value;
  const msgSuccesss = `<b>Dados corretos!</b> O valor: <b>${valueB}</b> é maior que <b>${valueA}</b>`
  const msgError = `<b>Erro de Dados!</b> O Valor: <b>${valueB}</b> é menor que <b>${valueA}</b>`

  if (valueA < valueB) {
    const successMsg =  document.querySelector('.success-msg');
    successMsg.innerHTML = msgSuccesss;
    successMsg.style.display = 'block';

    valueA.value = '';
    valueB.value = '';

  } else {
    const ErrorMsg =  document.querySelector('.error-msg');
    ErrorMsg.innerHTML = msgError;
    ErrorMsg.style.display = 'block';
  }

})