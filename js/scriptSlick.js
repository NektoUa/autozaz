$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        fade: true,
        pauseOnHover: true,

    });
    // $('.slider-news').slick({
    //     infinite: true,
    //     arrows: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: false,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     adaptiveHeight: true,
    //     pauseOnHover: true,
    //     centerMode: true,
    //     responsive: [
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         }
    //     ]
    // });


});

var stackedCardSlide = new stackedCards({ selector: '.example' });

stackedCardSlide.init();


