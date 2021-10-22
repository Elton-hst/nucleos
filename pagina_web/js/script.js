/*function enviar(){

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
    alert ('obrigado Sr(ª)' + nome.value + 'os seus dados foram enviados com sucesso');
    
    }

}*/



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });