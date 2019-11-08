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

var current = 1;
var max = $( "li" ).length +1;

$(".slidercontent").hide();
$(".slidercontent:nth-child(1)").fadeIn("slow");

//function to change to next quote
function changeUp() {
  $(".slidercontent").hide();
  current += 1;
  if (current === max) {
    current = 1;
  }
$(".slidercontent:nth-child(" + current + ")").fadeIn("slow");
}

function changeDown() {
  $(".slidercontent").hide();
  current -= 1;

  if (current === 0) {
    current = max - 1;
  }

  $(".slidercontent:nth-child(" + current + ")").fadeIn("slow");
}

startChange();

$(".sliderspot2").click(function() { 
  stopChange();
  changeUp();
  startChange();
});

$(".sliderspot").click(function() {
  stopChange();
  changeDown();
  startChange();
});

//FUNCTIONS TO CONTROL TIMING CHANGES
function startChange() {
changeIt = setInterval(function(){ 
changeUp();
}, 10000);
};

function stopChange() {
    clearInterval(changeIt);
}