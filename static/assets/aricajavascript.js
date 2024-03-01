$(window).on('load' , function() { 
    $("#status").fadeOut();
    $("#preloader h2").fadeOut(); 
    $("body").addClass('revealscroll');
    $("#preloader").delay(50).fadeOut("slow"); 
    AOS.init();

    setTimeout(function() {
        $("body").addClass('revealscroll');
    }, 60000);
})


var swiper2 = new Swiper(".pp-carousel-top", {
    direction: 'horizontal',
    spaceBetween: 10,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    autoplay: true,
    autoplay: {
        delay: 5000,
    },

    navigation: {
        nextEl: ".pp-next",
        prevEl: ".pp-prev",
    },
    loop: true,
    loopedSlides: 3,




});

var swiper1 = new Swiper(".pp-carousel-btm", {
    direction: 'horizontal',
    spaceBetween: -50,
    slidesPerView: 1,
    centeredSlides: true,
    watchSlidesProgress: true,
    loop: true,
    loopedSlides: 3,
    slideToClickedSlide: true,
    autoHeight:true,

    navigation: {
        nextEl: '.pp-next-btm',
        prevEl: '.pp-prev-btm',
    },

    pagination: {
        el: '.pp-pagination-btm',
    },

    breakpoints: {

        380: {
            slidesPerView: 1,
            spaceBetween: -50,

        },

        680: {
            slidesPerView: 1,
            spaceBetween: -100,

        },

        991: {
            slidesPerView: 2,
            spaceBetween: 0,

        },

        1200: {
            slidesPerView: 2,
            spaceBetween: 4,

        }
    }
});

swiper2.controller.control = swiper1;
swiper1.controller.control = swiper2;


var swiper4 = new Swiper(".ao-carousel-top", {
    direction: 'horizontal',
    // spaceBetween: 10,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    autoplay: true,
    autoplay: {
        delay: 5000,
    },
    
    centeredSlides:true,

    navigation: {
        nextEl: ".ao-next",
        prevEl: ".ao-prev",
    },
    loop: true,
    // loopedSlides: 3,

   


});

var swiper3 = new Swiper(".ao-carousel-btm", {
    direction: 'horizontal',
    // spaceBetween: -90,
    slidesPerView: 1,
    // centeredSlides: true,
    watchSlidesProgress: true,
    loop: true,
    loopedSlides: 1,
    slideToClickedSlide: true,
    // effect: "fade",
    autoHeight:true,

    pagination: {
        el: '.ao-pagination-btm',
    },


    // breakpoints: {

    //     380: {
    //         slidesPerView: 1,
    //         spaceBetween: -100,

    //     },

    //     480: {
    //         slidesPerView: 2,
    //         spaceBetween: -70,

    //     },

    //     680: {
    //         slidesPerView: 3,
    //         spaceBetween: 8,

    //     },
    // }
});

swiper4.controller.control = swiper3;
swiper3.controller.control = swiper4;
