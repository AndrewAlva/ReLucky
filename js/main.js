jQuery(document).ready(function($) {

	$('#windowWrapper').removeClass('crystal');

	//INTRO ANIMATION
		var frameRate = 20;

		var frameRateAnimation = 1000 / frameRate;
		setTimeout(function(){
			
			var introFrame = 1;
			var intervalID = setInterval(animationRunning,frameRateAnimation);

			function animationCycle(variable){
				// console.log("Check #animationFrame" + variable);
				$('#animationHolder').find('div[value="'+ variable + '"]').removeClass('crystal');

				if (introFrame < 32) {
					setTimeout(function(){
						$('#animationHolder').find('div[value="'+ variable + '"]').addClass('crystal');
					},frameRateAnimation);
				};
			}

			function animationRunning(){
				animationCycle(introFrame);
				introFrame += 1;
				if(introFrame > 32){
					clearInterval(intervalID);
					// console.log("Stop");
				}
			}
		},1000);

	// END INTOR ANIMATION

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

	// ADVICE CARDS ANIMATION
		// HOVER ANIMATION
			$('.adviceCards').mouseenter(function(event) {
				$(this).find('.cardName').addClass('colorHover');
				$(this).find('.hoverAppear').addClass('fadeIn');
				$(this).find('.upMove').addClass('goUpper');
				$(this).find('.shrinkMove').addClass('goShrink');
				$(this).find('h3').addClass('hoverTextShadow');
				$(this).find('.underLine').addClass('underlineHover');
			});

			$('.adviceCards').mouseleave(function(event) {
				$(this).find('.cardName').removeClass('colorHover');
				$(this).find('.hoverAppear').removeClass('fadeIn');
				$(this).find('.upMove').removeClass('goUpper');
				$(this).find('.shrinkMove').removeClass('goShrink');
				$(this).find('h3').removeClass('hoverTextShadow');
				$(this).find('.underLine').removeClass('underlineHover');
			});
		// END HOVER ANIMATION

		// CLICK INTERACTION ANIMATION
			$('.adviceCards').click(function(event) {
				$(this).addClass('bringToFront');
				$(this).find('.agencyData').append('<p> Esfera Comunicación <br> Luis Alberto Purata García <br> Director Asociado <br> <a href="mailto:luis.purata@esfera.cc">luis.purata@esfera.cc</a></p>');
				$(this).find('.agencyData').removeClass('crystal');

				$('.adviceCards').addClass('adviceCardSelected');
				$('.adviceCards').addClass('noPointer');
				$('.adviceCards').find('.cardDropShadow').addClass('adviceCardDropShadowHover');
				$('.adviceCards').find('#agencyData').removeClass('crystal');

				$('.adviceCards').find('.upMove').removeClass('goUpper');
				$('.adviceCards').find('.upMove').removeClass('upMove');

				$('.adviceCards').find('.hoverAppear').addClass('crystal');
				$('.adviceCards').find('.shrinkMove').addClass('crystal');
				$('.adviceCards').find('h3').addClass('crystal');
				$('.adviceCards').find('.underLine').addClass('crystal');

				setTimeout(function(){
					$('.adviceCards').find('.hoverAppear').remove();
					$('.adviceCards').find('.shrinkMove').remove();
					$('.adviceCards').find('h3').remove();
					$('.adviceCards').find('.underLine').remove();
				},600);

				
			});
		// END CLICK INTERACTION ANIMATION
	// END ADVICE CARDS ANIMATION

	// LANGUAGE DOB/SUB CARDS ANIMATION
		// HOVER ANIMATION
			$('.langCards').mouseenter(function(event) {
				$(this).find('.cardName').addClass('colorHover');
				$(this).find('.hoverAppear').addClass('fadeIn');
				$(this).find('.upMove').addClass('goUpper');
				$(this).find('.shrinkMove').addClass('goShrink');
				$(this).find('h3').addClass('hoverTextShadow');
				$(this).find('.underLine').addClass('underlineHover');
			});

			$('.langCards').mouseleave(function(event) {
				$(this).find('.cardName').removeClass('colorHover');
				$(this).find('.hoverAppear').removeClass('fadeIn');
				$(this).find('.upMove').removeClass('goUpper');
				$(this).find('.shrinkMove').removeClass('goShrink');
				$(this).find('h3').removeClass('hoverTextShadow');
				$(this).find('.underLine').removeClass('underlineHover');
			});
		// END HOVER ANIMATION

		// CLICK INTERACTION ANIMATION
			$('.adviceCards').click(function(event) {
				$(this).addClass('bringToFront');
				$(this).find('.agencyData').append('<p> Esfera Comunicación <br> Luis Alberto Purata García <br> Director Asociado <br> <a href="mailto:luis.purata@esfera.cc">luis.purata@esfera.cc</a></p>');
				$(this).find('.agencyData').removeClass('crystal');

				$('.adviceCards').addClass('adviceCardSelected');
				$('.adviceCards').addClass('noPointer');
				$('.adviceCards').find('.cardDropShadow').addClass('adviceCardDropShadowHover');
				$('.adviceCards').find('#agencyData').removeClass('crystal');

				$('.adviceCards').find('.upMove').removeClass('goUpper');
				$('.adviceCards').find('.upMove').removeClass('upMove');

				$('.adviceCards').find('.hoverAppear').addClass('crystal');
				$('.adviceCards').find('.shrinkMove').addClass('crystal');
				$('.adviceCards').find('h3').addClass('crystal');
				$('.adviceCards').find('.underLine').addClass('crystal');

				setTimeout(function(){
					$('.adviceCards').find('.hoverAppear').remove();
					$('.adviceCards').find('.shrinkMove').remove();
					$('.adviceCards').find('h3').remove();
					$('.adviceCards').find('.underLine').remove();
				},600);

				
			});
		// END CLICK INTERACTION ANIMATION
	// END LANGUAGE DOB/SUB CARDS ANIMATION

	// CARDS SHADOWS
		$('.activeCardShadow').mouseenter(function(event) {
			$(this).find('.cardDropShadow').addClass('cardDropShadowHover');
		});
		$('.activeCardShadow').mouseleave(function(event) {
			$(this).find('.cardDropShadow').removeClass('cardDropShadowHover');
		});
	// END CARDS SHADOWS




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
		    // var s = addZero(d.getSeconds());
		    
		    	// x.append(h + ":" + m + ":" + s);
		    	x.append(h + ":" + m);
	// END GET TIME

	// LINKS HREF

		$('.link-Contact').click(function() {
			$('#contactWrapper').addClass('bringContact');
			$('.fullEmbedWrapper').addClass('pushEmbed');

			// BG ANIMATION
				$('.innerLayer').addClass('pullLeft');
			// END BG ANIMATION
		});

		$('#closeContact').click(function() {
			$('#contactWrapper').removeClass('bringContact');
			$('.fullEmbedWrapper').removeClass('pushEmbed');

			// BG ANIMATION
				$('.innerLayer').removeClass('pullLeft');
			// END BG ANIMATION
		});
	// END LINKS HREF
});








