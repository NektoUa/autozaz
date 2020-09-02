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

    $(".owl-carousel").owlCarousel({
        items: 4,
        lazyLoad: true,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    });

});


