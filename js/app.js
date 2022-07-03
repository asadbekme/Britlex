let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .container .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}