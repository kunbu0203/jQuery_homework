$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            revEl: '.swiper-button-prev',
            
        },
    })

    $('#index').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.banner').offset().top
        }, 500);
    });

    $('#product').click(function (e) { 
        e.preventDefault();
        $('#subNav').slideToggle();
        $(this).parent().toggleClass('active');
    });

    $('#intro').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.intro').offset().top - 50
        }, 500);
        $('#subNav').slideToggle();
        $('#product').parent().removeClass('active');
    });

    $('#difference').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.difference').offset().top - 50
        }, 500);
        $('#subNav').slideToggle();
        $('#product').parent().removeClass('active');
    });

    $('#contact').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.contact').offset().top
        }, 500);
    });
});