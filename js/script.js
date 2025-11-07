// ==========================================================
// MENÚ HAMBURGUESA
// ==========================================================
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

if (hamburger && navbar) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
  });
}

// ==========================================================
// MODO CLARO / OSCURO
// ==========================================================
const btnSwitchMode = document.querySelector(".theme-switch");
const toDark = document.querySelector(".to-dark-mode");
const toLight = document.querySelector(".to-light-mode");
const body = document.querySelector("body");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toDark.classList.add("hide-cont");
  toLight.classList.remove("hide-cont");
}

btnSwitchMode?.addEventListener("click", () => {
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

// ==========================================================
// TICKETS MULTIPLE SELECTION
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
  const prices = {
    street: 5,
    block: 10,
    graffiti: 15
  };

  const inputs = document.querySelectorAll('.ticket-type input[type="number"]');
  const totalDisplay = document.getElementById('ticket-price');

  function updateTotal() {
    let total = 0;
    inputs.forEach(input => {
      const type = input.name;
      const quantity = parseInt(input.value) || 0;
      total += prices[type] * quantity;
    });
    totalDisplay.textContent = `${total}€`;
  }

  inputs.forEach(input => {
    input.addEventListener('input', updateTotal);
  });

  const form = document.getElementById('tickets-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    alert(`Purchase completed!\nTotal: ${totalDisplay.textContent}`);
  });
});