$(document).ready(function(e) {
    e.preventDefault();

    $('#input-phone').mask('(00) 00000-0000');
    $('#input-cpf').mask('000.000.000-00');
    $('#input-cep').mask('00-000-000');
    
});

$('form button').on('click', function() {
    $(alert('Usuário Cadastrado com sucesso!'))
})