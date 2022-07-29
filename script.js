$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 0){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // .scroll-up-btn slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle hamburger menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    const typed = new Typed(".typing", {
        strings: ["Freelancer", "Web Developer", "Creator", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // typing animation script
    const typedAbout = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Web Developer", "Creator", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});