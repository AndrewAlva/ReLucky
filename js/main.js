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




	// QUESTION PACKS
		// Declaring Questions Variables
			var clientQ1, clientQ2, clientQ3, clientQ4, clientQ5, talentQ1, talentQ2, talentQ3, talentQ4, competitionQ1, competitionQ2; 

			var questionsClient = [clientQ1, clientQ2, clientQ3, clientQ4, clientQ5];
			var questionsTalent = [talentQ1, talentQ2, talentQ3, talentQ4];
			var questionsCompetition = [competitionQ1, competitionQ2];

		// Declaring Answers Variables
			var clientA1, clientA2, clientA3, clientA4, clientA5, talentA1, talentA2, talentA3, talentA4, competitionA1, competitionA2; 

			var answersClient = [clientA1, clientA2, clientA3, clientA4, clientA5];
			var answersTalent = [talentA1, talentA2, talentA3, talentA4];
			var answersCompetition = [competitionA1, competitionA2];
			
		
		// On HTML the target is: id="firstBlankQuestion"

		// CLIENT QUESTION PACK
			// QUESTION 1
				questionsClient[0] = '¿Buscas una agencia que conecte al consumidor con tu marca de una manera eficaz? ';
				// ANSWER
				answersClient[0] = 'Todas las agencias de publicidad tienen el mismo speech, si te interesa trabajar con una agencia “by the book” te recomendamos.';
			// END QUESTION 1


			// QUESTION 2
				questionsClient[1] = '¿Te da miedo arriesgarte y salir de tu zona de comfort?';
				// ANSWER
				answersClient[1] = 'Respetamos tu decisión, te recomendamos agencias que no se saldrán de la caja, solo recuerda el que no arriesga no gana.';
			// END QUESTION 2


			// QUESTION 3
				questionsClient[2] = '¿Prefieres agencias con nombres propios y difíciles de pronunciar?';
				// ANSWER
				answersClient[2] = 'Si eres de los que creen que el nombre lo es todo, te recomendamos a estas grandes agencias que también son nuestra inspiración.';
			// END QUESTION 3


			// QUESTION 4
				questionsClient[3] = '¿Crees que el hambre puede más que el talento?';
				// ANSWER
				answersClient[3] = 'Creemos que te sorprendes por un gran portafolio, por lo que te recomendamos a quienes como nosotros empezaron desde abajo, con mucha hambre.';
			// END QUESTION 4


			// QUESTION 5
				questionsClient[4] = '¿Buscas agencias multigalardonadas y con larga trayectoria?';
				// ANSWER
				answersClient[4] = 'Aquí si tenemos que ser sinceros, nosotros no tenemos ningún premio en nuestra pared, sin embargo ninguna de estas grandes agencia nació con premios.';
			// END QUESTION 5
		// END CLIENT QUESTION PACK


		// TALENT QUESTION PACK
			// QUESTION 1
				questionsTalent[0] = 'Así que ¿Quieres trabajar con nosotros? <br> ¿Tomas?';

				// ANSWER
				answersTalent[0] = 'Si mentiste por quedar bien o si realmente no tomas la madriguera no es el lugar adecuado para ti, pero te recomendamos otro tipo de agencia.';
			// QUESTION 1
			


			// QUESTION 2
				questionsTalent[1] = '¿Vienes por un horario de 9 a.m. a 6 p.m.?';
				// ANSWER
				answersTalent[1] = 'Nosotros estamos buscando gente que le apasione la publicidad  y que no la limite un horario, pero no te preocupes aquí podrás encontrar lo que buscas.';
			// END QUESTION 2


			// QUESTION 3
				questionsTalent[2] = '¿Tienes más de 30 años?';
				// ANSWER
				answersTalent[2] = 'Lo sentimos, no es personal pero nuestro promedio de edad subiría contigo, en estas agencias serás joven otra vez.';
			// END QUESTION 3


			// QUESTION 4
				questionsTalent[3] = '¿Crees que el hambre puede más que el talento?';
				// ANSWER
				answersTalent[3] = 'Apreciamos el talento pero nos gusta más el hambre de ser, en Lucky más que books buscamos ganar de trascender, las siguientes agencias buscan solo talento.';
			// END QUESTION 4
		// END TALENT QUESTION PACK


		// COMPETITION QUESTION PACK
			// QUESTION 1
				questionsCompetition[0] = '¿Buscas inspiración? ';
				// ANSWER
				answersCompetition[0] = 'Entonces ¿Qué haces aquí?';
			// QUESTION 1


			// QUESTION 2
				questionsCompetition[1] = '¿Neta tu chamba no es suficiente?';
				// ANSWER
				answersCompetition[1] = 'Anyway, date un repasón.';
			// END QUESTION 2
		// END COMPETITION QUESTION PACK
	// END QUESTION PACKS

	// AGENCIES PACKS

		// Declaring Questions Variables
			var clientQ1, clientQ2, clientQ3, clientQ4, clientQ5, talentQ1, talentQ2, talentQ3, talentQ4, competitionQ1, competitionQ2; 

			var questionsClient = [clientQ1, clientQ2, clientQ3, clientQ4, clientQ5];
			var questionsTalent = [talentQ1, talentQ2, talentQ3, talentQ4];
			var questionsCompetition = [competitionQ1, competitionQ2];

		// DECLARE AGENCIES VARIABLES
			var agencyName1,agencyName2,agencyName3,agencyName4,agencyName5,agencyName6;

			var agenciesName = [agencyName1,agencyName2,agencyName3,agencyName4,agencyName5,agencyName6];

		// DECLARE AGENCIES DATA VARIABLES
			var agencyData1,agencyData2,agencyData3,agencyData4,agencyData5,agencyData6;

			var agenciesData = [agencyData1,agencyData2,agencyData3,agencyData4,agencyData5,agencyData6];

			// ESFERA AGENCY
			agenciesName[0] = 'Esfera';
			agenciesData[0] = '<p> Esfera Comunicación <br> Luis Alberto Purata García <br> Director Asociado <br> <a href="mailto:luis.purata@esfera.cc">luis.purata@esfera.cc</a></p>';

			// CEROCUATRO AGENCY
			agenciesName[1] = 'CeroCuatro';
			agenciesData[1] = '<p> Cero Cuatro <br> Rodrigo Noriega <br> Director General <br> <a href="mailto:rodrigo.noriega@cerocuatro.com">rodrigo.noriega@cerocuatro.com</a></p>';

			// BRANDCORP AGENCY
			agenciesName[2] = 'Brandcorp';
			agenciesData[2] = '<p> Brandcorp <br> Juan de Dios Mayorquín <br> CEO <br> <a href="mailto:juand@brandcorp.com.mx">juand@brandcorp.com.mx</a></p>';

			// VÉRTICE AGENCY
			agenciesName[3] = 'Vértice';
			agenciesData[3] = '<p> Vértice <br> Javier Álvarez <br> Director General <br> <a href="mailto:javier.alvarez@verticecom.com">javier.alvarez@verticecom.com</a></p>';

			// ALQUIMIA AGENCY
			agenciesName[4] = 'Alquimia';
			agenciesData[4] = '<p> Alquimia <br> Alejandro Rodríguez <br> Director General <br> <a href="mailto:alvidrez@alquimiag.com">alvidrez@alquimiag.com</a></p>';

			// KP AGENCY
			agenciesName[5] = 'KP';
			agenciesData[5] = '<p> KP <br> Hugo Pulido <br> Fundador <br> <a href="mailto:pulido@kp.com.mx">pulido@kp.com.mx</a></p>';

			// LEO BURNETT AGENCY
			agenciesName[6] = '<div class="agencyAdvice shortAdvice"> <h3>Leo Burnett</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData[6] = '<p> Leo Burnett <br> Pablo de Arteaga <br> CEO <br> <a href="http://www.leoburnett.com/" target="_blank">http://www.leoburnett.com/</a></p>';

			// J. WALTER THOMPSON AGENCY
			agenciesName[7] = '<div class="agencyAdvice longAdvice"> <h3>J. Walter Thompson</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData[7] = '<p> J. Walter Thompson <br> Mariate Arnal <br> CEO <br> <a href="https://www.jwt.com/mexicocity/" target="_blank">https://www.jwt.com/mexicocity/</a></p>';

			// YOUNG & RUBICAM AGENCY
			agenciesName[8] = '<div class="agencyAdvice longAdvice"> <h3>Young & Rubicam</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData[8] = '<p> Young & Rubicam <br> Juan Bonilla <br> Presidente <br> <a href="http://www.yr.com.mx/" target="_blank">http://www.yr.com.mx/</a></p>';

			// ANÓNIMO AGENCY
			agenciesName[9] = '<div class="agencyAdvice shortAdvice"> <h3>Anónimo</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData[9] = '<p> Anónimo <br> Raúl Cardos <br> Fundador <br> <a href="mailto:raul@anonimo.mx">raul@anonimo.mx</a></p>';

			// FLOCK AGENCY
			agenciesName[10] = '<div class="agencyAdvice shortAdvice"> <h3>Flock</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData[10] = '<p> Flock <br> Sebastian Tonda <br> CEO </p>';

			// GRUPO W AGENCY
			agenciesName[11] = '<div class="agencyAdvice shortAdvice"> <h3>Grupo W</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData[11] = '<p> Grupo W <br> Ulises Valencia <br> Director <br> <a href="mailto:uvalencia@grupow.com">uvalencia@grupow.com</a></p>';

			// DDB AGENCY
			agenciesName[12] = '<div class="agencyAdvice shortAdvice"> <h3>DDB</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData[12] = '<p> DDB <br> Matías del Campo <br> CEO <br> </p>';

			// BBDO AGENCY
			agenciesName[13] = '<div class="agencyAdvice shortAdvice"> <h3>BBDO</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData[13] = '<p> BBDO <br> Carlos Vaca <br> CEO </p>';

			// TERÁN/TBWA AGENCY
			agenciesName[14] = '<div class="agencyAdvice shortAdvice"> <h3>Terán/TBWA</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData[14] = '<p> Terán/TBWA <br> José Alberto Terán <br> CEO <br> </p>';

			// MISCHTECH AGENCY
			agenciesName[15] = '<div class="agencyAdvice shortAdvice"> <h3>Mischtech</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData[15] = '<p> Mischtech <br> Edgardo López <br> CEO <br> <a href="mailto:edgardo@mishtech.com">edgardo@mishtech.com</a> </p>';

		

			
			
			
			
			
			
			
			
			
			
			
			
	// END AGENCIES PACKS
});








