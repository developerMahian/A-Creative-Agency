const hamMenu = document.querySelector('.toggle-menu');
const navbar = document.querySelector('.toggle-nav');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navbar.classList.toggle('active');
})