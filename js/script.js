// Selecciona todos los personajes
const legendCards = document.querySelectorAll('.legend-card');
const modal = document.createElement('div');

// Crea estructura modal
modal.id = 'legendModal';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <img src="" alt="">
    <h3></h3>
    <p></p>
  </div>
`;
document.body.appendChild(modal);

// Referencias internas
const modalImg = modal.querySelector('img');
const modalName = modal.querySelector('h3');
const modalInfo = modal.querySelector('p');
const closeModalBtn = modal.querySelector('.close-modal');

// Abrir modal al hacer click
legendCards.forEach(card => {
  card.addEventListener('click', () => {
    const name = card.getAttribute('data-name');
    const info = card.getAttribute('data-info');
    const image = card.getAttribute('data-image');

    modalImg.src = image;
    modalImg.alt = name;
    modalName.textContent = name;
    modalInfo.textContent = info;

    modal.classList.add('show');
  });
});

// Cerrar modal aspa
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Cerrar modal pulsar fuera
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

// Cerrar con esc
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.classList.remove('show');
  }
});





// MENÚ DE HAMBURGUESA
const hamburger = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  })
);