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

    $('#product').click(function (e) { 
        e.preventDefault();
        $('#subNav').slideToggle();
        $(this).parent().toggleClass('active');
    });
});