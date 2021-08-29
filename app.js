const burgerToggle = document.querySelector('.burger-menu');
const navList = document.querySelector('nav');
const closeToggle = document.querySelector('.close-toggle');

burgerToggle.addEventListener('click', () => {
  navList.classList.toggle('nav-active');
});
closeToggle.addEventListener('click', () => {
  navList.classList.remove('nav-active');
});
