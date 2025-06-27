import './style.css';
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('menu-btn');

function init() {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
  });
}

document.addEventListener('DOMContentLoaded', init);
