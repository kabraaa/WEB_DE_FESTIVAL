// PANTALLA DE CARGA
var contador = 0;

function carga() {
    if (contador <= 100) {
        document.getElementById("porcentaje").innerHTML = contador + "%";
        contador = contador + 1;
        setTimeout(carga, 50);
    } else {
        document.getElementById("carga").style.top = "-100%";
    }
}

window.onload = function () {
    carga();
}





// VENTANAS MODALES HIP HOP LEGENDS
// Selecciona todos los personajes
const legendCards = document.querySelectorAll('.legend-card');
const modal = document.createElement('div');

// Crea estructura modal

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
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navBar.classList.remove('active');
  })
);

const currentPage = window.location.pathname.split('/').pop(); // obtiene el archivo actual (ej: origins.html)
document.querySelectorAll('.navbar a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active-link');
  }
});





// MODO CLARO / OSCURO
const btnSwitchMode = document.querySelector(".theme-switch");
const toDark = document.querySelector(".to-dark-mode");
const toLight = document.querySelector(".to-light-mode");
const body = document.querySelector("body");

// Cargar el modo guardado
if (localStorage.getItem("theme")==="dark") {
  body.classList.add("dark-theme");
  toDark.classList.add("hide-cont");
  toLight.classList.remove("hide-cont");
}

btnSwitchMode.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-theme");

  toDark.classList.toggle("hide-cont");
  toLight.classList.toggle("hide-cont");

  if (isDark) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }
});