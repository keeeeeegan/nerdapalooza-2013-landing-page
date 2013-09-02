
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

// some constants you setup before starting
var marqueeWidth = $('.marquee').textWidth();
var marqueeTime = marqueeWidth * 10;

// scroll left to the end, then scroll back
function startMarquee() {
	$('.marquee').animate({
		scrollLeft: marqueeWidth
		}, marqueeTime, "linear", function() {
			//startMarquee();
			$(this).animate({
				scrollLeft: 0
				}, (marqueeTime), "linear", function() {
					startMarquee();
			});
	});
}

startMarquee();