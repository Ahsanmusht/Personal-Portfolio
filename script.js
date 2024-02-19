let menuBar = document.querySelector('#menu-bar');

let navbar = document.querySelector('.navbar');

menuBar.onclick = () =>{

    menuBar.classList.toggle('fa-times');

    navbar.classList.toggle('active');
}


$(window).on('load scroll',function(){

    if($(window).scrollTop() > 30){

        $('.header').css({'background':'#fff'});
        $('.logo').css({ 'color':'#000'})
        $('.navbar').css({ 'background-color':'#fff'})
        $('.fa-bars').css({ 'color':'#000'})
        $('.navbar a').css({ 'color':'#000'})
        $('.navbar a i').css({ 'color':'#5C1324'})
        $('.highlight').css({ 'color':'#5C1324'})
    }else{

        $('.header').css({'background':'none'});
        $('.logo').css({ 'color':'#fff'})
        $('.fa-bars').css({ 'color':'#fff'})
        $('.navbar a').css({ 'color':'#fff'})
        $('.navbar').css({ 'background-color':'#561020'})
        $('.navbar a i').css({ 'color':'#fff'})
        $('.highlight').css({ 'color':'#fff'})
    }
    

});