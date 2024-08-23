import cards from './data.js';
// Activacion de tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function createCards(cards) {
  const container = document.querySelector('#portfolio .row');

  cards.forEach(card => {
    const cardCol = document.createElement('div');
    cardCol.classList.add('col-sm-12', 'col-md-6', 'col-xl-4', 'mb-5');
    cardCol.innerHTML = `
      <div class="card">
        <img src="${card.imgSrc}" class="card-img-top" alt="${card.title}">
        <div class="card-body">
          <h4 class="card-title fw-bold">${card.title}</h4>
          <p class="card-text">${card.description}</p>
          <div class="d-flex flex-row justify-content-center gap-4 py-2 flex-wrap">
            ${card.icons.map(icon => `<i class="${icon} colored display-5"></i>`).join('')}
          </div>
          <div class="d-flex justify-content-center text-center gap-3 mt-4">
            <a href="${card.links[0].url}" class="btn light"><i class="fa-solid fa-link"></i> ${card.links[0].text}</a>
            <a href="${card.links[1].url}" class="btn light"><i class="fa-solid fa-code"></i> ${card.links[1].text}</a>
          </div>
        </div>
      </div>
    `;
    container.appendChild(cardCol);
  });
}


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
createCards(cards);
console.log(cards)