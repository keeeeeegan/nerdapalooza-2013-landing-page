// super simple image switcher for nerdapalooza page

var count = 1;
var next = 0;
var max = $('.carousel .photo').length;

// every 5000 ms change the image (fade it all fancy with the next one)
setInterval(function() {
	$('.carousel .photo:nth-child(' + count + ')').fadeOut('slow');
	// use the ternary operator to determine the next image or loop to the first
	next = (count + 1 <= max) ? (count + 1) : 1;
	$('.carousel .photo:nth-child(' + next + ')').fadeIn('slow');
	count = next;
}, 5000);