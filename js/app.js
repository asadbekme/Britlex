let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .container .navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
}