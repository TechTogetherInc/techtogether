// makes the circles on the home page have equal width and height no matter the screen size

// On load
var cw = $('.height-change-js').width();
$('.height-change-js').css({ 'height': cw + 'px' });

var cw2 = $('.height-change-js-2').width();
$('.height-change-js-2').css({ 'height': cw2 + 'px' });

var cw3 = $('.height-change-js-3').width();
$('.height-change-js-3').css({ 'height': cw3 + 'px' });


// When screen size changes
$(window).resize(function () {
    var cw = $('.height-change-js').width();
    $('.height-change-js').css({ 'height': cw + 'px' });

    var cw2 = $('.height-change-js-2').width();
    $('.height-change-js-2').css({ 'height': cw2 + 'px' });

    var cw3 = $('.height-change-js-3').width();
    $('.height-change-js-3').css({ 'height': cw3 + 'px' });
});

