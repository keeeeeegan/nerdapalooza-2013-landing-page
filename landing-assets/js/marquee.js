// pretty simple marquee for nerdapalooza landing page

// calculate actual width of marquee
// http://stackoverflow.com/a/2771544
$.fn.textWidth = function(){
	var html_org = $(this).html();
	var html_calc = '<span>' + html_org + '</span>';
	$(this).html(html_calc);
	var width = $(this).find('span:first').width();
	$(this).html(html_org);
	return width;
};

var frontPadding = $('.marquee-container').outerWidth() + 100;
$('.marquee span.featured').css('padding-left', frontPadding);
$('.marquee span.last').css('padding-right', frontPadding);

// some constants you setup before starting
var marqueeTextWidth = $('.marquee').textWidth();
var marqueeWidth = $('.marquee').width();
var marqueeOuterWidth = $('.marquee').outerWidth();
var marqueeTime = marqueeTextWidth * 10;

var scrollDistance = marqueeTextWidth - marqueeWidth + 100;

// scroll left to the end, then scroll back
function startMarquee() {
	$('.marquee').animate({
		scrollLeft: scrollDistance

		}, marqueeTime, "linear", function() {
			//startMarquee();
			
//			$(this).animate({
//				scrollLeft: 0
//				}, (marqueeTime), "linear", function() {
//					startMarquee();
//			});

			//$(this).animate({
			//	opacity: 0
			//	}, (300), function() {
			//		$(this).scrollLeft(0);
			//		//$(this).opacity(1);
			//		startMarquee();
			//});
			
			$(this).scrollLeft(0);
			startMarquee();
	});
}


startMarquee();