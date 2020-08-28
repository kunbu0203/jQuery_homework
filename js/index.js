$(document).ready(function () {
    $('#product').click(function (e) { 
        e.preventDefault();
        $('#subNav').slideToggle();
        $(this).parent().toggleClass('active');
    });
});