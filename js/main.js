jQuery(document).ready(function($) {

	// 3 OPTIONS CARDS ANIMATION
		// HOVER ANIMATION
			$('.thirdCards').mouseenter(function(event) {
				$(this).find('.cardName').addClass('colorHover');
				$(this).find('.hoverAppear').addClass('fadeIn');
				$(this).find('.upMove').addClass('goUpper');
			});

			$('.thirdCards').mouseleave(function(event) {
				$(this).find('.cardName').removeClass('colorHover');
				$(this).find('.hoverAppear').removeClass('fadeIn');
				$(this).find('.upMove').removeClass('goUpper');
			});
		// END HOVER ANIMATION
	// END 3 OPTIONS CARDS ANIMATION

	// 2 OPTIONS CARDS ANIMATION
		// HOVER ANIMATION
			$('.secondCards').mouseenter(function(event) {
				$(this).find('.cardName').addClass('colorHover');
				$(this).find('.hoverAppear').addClass('fadeIn');
				$(this).find('.upMove').addClass('goUpper');
				$(this).find('.shrinkMove').addClass('goShrink');
			});

			$('.secondCards').mouseleave(function(event) {
				$(this).find('.cardName').removeClass('colorHover');
				$(this).find('.hoverAppear').removeClass('fadeIn');
				$(this).find('.upMove').removeClass('goUpper');
				$(this).find('.shrinkMove').removeClass('goShrink');
			});
		// END HOVER ANIMATION
	// END 2 OPTIONS CARDS ANIMATION

	// UNIQUE OPTION CARDS ANIMATION
		// HOVER ANIMATION
			$('.uniqueCard').mouseenter(function(event) {
				$(this).find('.cardName').addClass('colorHover');
				$(this).find('.hoverAppear').addClass('fadeIn');
				$(this).find('.upMove').addClass('goUpper');
				$(this).find('.shrinkMove').addClass('goShrink');
			});

			$('.uniqueCard').mouseleave(function(event) {
				$(this).find('.cardName').removeClass('colorHover');
				$(this).find('.hoverAppear').removeClass('fadeIn');
				$(this).find('.upMove').removeClass('goUpper');
				$(this).find('.shrinkMove').removeClass('goShrink');
			});
		// END HOVER ANIMATION
	// END UNIQUE OPTION CARDS ANIMATION

	// GET TIME
		function addZero(i) {
		    if (i < 10) {
		        i = "0" + i;
		    }
		    return i;
		}

		var d = new Date();
		    var x = $('.cardLastRead');
		    var h = addZero(d.getHours());
		    var m = addZero(d.getMinutes());
		    var s = addZero(d.getSeconds());
		    
		    	x.append(h + ":" + m + ":" + s);
	// END GET TIME

	// LINKS HREF
		// $('.link-Behance').click(function(event) {
		// 	location.href = "https://www.behance.net/luckyideas";
		// });

		// $('.link-Instagram').click(function(event) {
		// 	location.href = "https://instagram.com/luckyideas/";
		// });

		$('.link-Contact').click(function() {
			$('#contactWrapper').addClass('bringContact');
		});
	// END LINKS HREF
});








