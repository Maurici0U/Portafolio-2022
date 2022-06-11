$(document).ready(function(){
    $(window).scroll(function(){
       // barra de navegación pegada en el script de desplazamiento
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // botón de desplazamiento hacia arriba mostrar/ocultar secuencia de comandos
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

  // secuencia de comandos deslizante
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
       // eliminar el desplazamiento suave al hacer clic en el botón deslizable hacia arriba
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
       // aplicar de nuevo el desplazamiento suave en los elementos del menú, hacer clic
        $('html').css("scrollBehavior", "smooth");
    });

   // alternar menú/script de barra de navegación
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // comandos de animación de texto
    var typed = new Typed(".typing", {
        strings: ["Desarrollador","Front-end"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Front-end"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // guión de carrusel 
    var video =document.querySelectorAll('video')
    video.forEach(play => play.addEventListener('click',()=>{
        play.classList.toggle('active');
        if(play.paused){
            play.play();
        }else{
            play.pause();
            play.currentTime = 0;
        }
    }))

    });
