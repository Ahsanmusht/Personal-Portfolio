let menuBar = document.querySelector('#menu-bar');

let navbar = document.querySelector('.nav');

menuBar.onclick = () =>{

    menuBar.classList.toggle('fa-times');

    navbar.classList.toggle('active');
}
