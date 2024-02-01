let menuBar = document.querySelector('#menu-bar');

let navbar = document.querySelector('.nav');

menuBar.onclick = () =>{

    menuBar.classList.toggle('fa-times');

    navbar.classList.toggle('active');
}


$(window).on('load scroll',function(){

    if($(window).scrollTop() > 30){

        $('.header').css({'background':'#fff', 'box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});

    }else{

        $('.header').css({'background':'none', 'box-shadow':'none'});
    }
    

});