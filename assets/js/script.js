// Activacion de tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$(document).ready(function(){
  $('form').on('submit', function(event) {
    const mensajeLimite = 250;
    var mensaje = $('#exampleTextarea').val();

    if (mensaje.length > mensajeLimite) {
      alert(`El mensaje no debe superar los ${mensajeLimite} caracteres.`);
      $('#exampleTextarea')[0].setCustomValidity(`El mensaje no debe superar los ${mensajeLimite} caracteres.`);
    } else {
      $('#exampleTextarea')[0].setCustomValidity('');
    }
    event.preventDefault();
  });

});