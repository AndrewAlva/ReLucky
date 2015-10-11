jQuery(document).ready(function($) {




	$('#windowWrapper').removeClass('crystal');

	// RANDOM SHUFFLE FOR QUESTIONS EXPERIENCE
		function shuffle(array) {
			var m = array.length, t, i;

			// While there remain elements to shuffle…
			while (m) {

				// Pick a remaining element…
				i = Math.floor(Math.random() * m--);

				// And swap it with the current element.
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}

			return array;
		}

		var randomClient = [0,1,2,3,4];
		var randomTalent = [0,1,2,3];

		shuffle(randomClient);
		shuffle(randomTalent);

		var selectedClientQA1 = randomClient[0];
		var selectedClientQA2 = randomClient[1];
		var selectedClientQA3 = randomClient[2];

		var selectedTalentQA1 = randomTalent[0];
		var selectedTalentQA2 = randomTalent[1];
		var selectedTalentQA3 = randomTalent[2];

		for (var i = 0; i < randomClient.length; i++) {
			console.log('i count: ' + i + ' Random Client: ' + randomClient[i]);
		};

		for (var i = 0; i < randomTalent.length; i++) {
			console.log('i count: ' + i + ' Random Talent: ' + randomTalent[i]);
		};


		console.log("Selected as Client Question 1: " + selectedClientQA1);
		console.log("Selected as Client Question 2: " + selectedClientQA2);
		console.log("Selected as Client Question 3: " + selectedClientQA3);

		console.log("Selected as Talent Question 1: " + selectedTalentQA1);
		console.log("Selected as Talent Question 2: " + selectedTalentQA2);
		console.log("Selected as Talent Question 3: " + selectedTalentQA3);
	// END RANDOM SHUFFLE

	// QUESTION PACKS
		// Declaring Questions Variables
			var clientQ1, clientQ2, clientQ3, clientQ4, clientQ5, talentQ1, talentQ2, talentQ3, talentQ4, competitionQ1, competitionQ2; 

			

		// Declaring Answers Variables
			var clientA1, clientA2, clientA3, clientA4, clientA5, talentA1, talentA2, talentA3, talentA4, competitionA1, competitionA2; 



		// Declaring Continue Copys Variables
			var clientC1, clientC2, clientC3, clientC4, clientC5;
			
		
		// On HTML the target is: id="firstBlankQuestion"

		// CLIENT QUESTION PACK
			// QUESTION 1
				clientQ1 = '¿Buscas una agencia que conecte al consumidor con tu marca de una manera eficaz? ';
				// ANSWER
				clientA1 = 'Todas las agencias de publicidad tienen el mismo speech, si te interesa trabajar con una agencia “by the book” te recomendamos.';
				// CONTINUE COPY
				clientC1 = 'Descubre nuestro speech.';
			// END QUESTION 1


			// QUESTION 2
				clientQ2 = '¿Te da miedo arriesgarte y salir de tu zona de comfort?';
				// ANSWER
				clientA2 = 'Respetamos tu decisión, te recomendamos agencias que no se saldrán de la caja, solo recuerda el que no arriesga no gana.';
				// CONTINUE COPY
				clientC2 = 'Mejor, rétanos a sorprenderte.';
			// END QUESTION 2


			// QUESTION 3
				clientQ3 = '¿Prefieres agencias con nombres propios y difíciles de pronunciar?';
				// ANSWER
				clientA3 = 'Si eres de los que creen que el nombre lo es todo, te recomendamos a estas grandes agencias que también son nuestra inspiración.';
				// CONTINUE COPY
				clientC3 = 'Ayúdanos a crear nuestro propio nombre.';
			// END QUESTION 3


			// QUESTION 4
				clientQ4 = '¿Crees que el hambre puede más que el talento?';
				// ANSWER
				clientA4 = 'Creemos que te sorprendes por un gran portafolio, por lo que te recomendamos a quienes como nosotros empezaron desde abajo, con mucha hambre.';
				// CONTINUE COPY
				clientC4 = 'Confía en nuestra hambre, conoce nuestro talento.';
			// END QUESTION 4


			// QUESTION 5
				clientQ5 = '¿Buscas agencias multigalardonadas y con larga trayectoria?';
				// ANSWER
				clientA5 = 'Aquí si tenemos que ser sinceros, nosotros no tenemos ningún premio en nuestra pared, sin embargo ninguna de estas grandes agencia nació con premios.';
				// CONTINUE COPY
				clientC5 = 'Sé nuestro primer premio.';
			// END QUESTION 5
		// END CLIENT QUESTION PACK


		// TALENT QUESTION PACK
			// QUESTION 1
				talentQ1 = '¿Tomas?';

				// ANSWER
				talentA1 = 'Si mentiste por quedar bien o si realmente no tomas la madriguera no es el lugar adecuado para ti, pero te recomendamos otro tipo de agencia.';
			// QUESTION 1
			


			// QUESTION 2
				talentQ2 = '¿Vienes por un horario de 9 a.m. a 6 p.m.?';
				// ANSWER
				talentA2 = 'Nosotros estamos buscando gente que le apasione la publicidad  y que no la limite un horario, pero no te preocupes aquí podrás encontrar lo que buscas.';
			// END QUESTION 2


			// QUESTION 3
				talentQ3 = '¿Tienes más de 30 años?';
				// ANSWER
				talentA3 = 'Lo sentimos, no es personal pero nuestro promedio de edad subiría contigo, en estas agencias serás joven otra vez.';
			// END QUESTION 3


			// QUESTION 4
				talentQ4 = '¿Crees que el hambre puede más que el talento?';
				// ANSWER
				talentA4 = 'Apreciamos el talento pero nos gusta más el hambre de ser, en Lucky más que books buscamos ganar de trascender, las siguientes agencias buscan solo talento.';
			// END QUESTION 4
		// END TALENT QUESTION PACK


		// COMPETITION QUESTION PACK
			// QUESTION 1
				competitionQ1 = '¿Buscas inspiración? ';
				// ANSWER
				competitionA1 = 'Entonces ¿Qué haces aquí?';
			// QUESTION 1


			// QUESTION 2
				competitionQ2 = '¿Neta tu chamba no es suficiente?';
				// ANSWER
				competitionA2 = 'Anyway, date un repasón.';
			// END QUESTION 2
		// END COMPETITION QUESTION PACK

		// INSERTING QUESTIONS AND ANSWERS
			var questionsClient = [clientQ1, clientQ2, clientQ3, clientQ4, clientQ5];
			var questionsTalent = [talentQ1, talentQ2, talentQ3, talentQ4];
			var questionsCompetition = [competitionQ1, competitionQ2];

			var answersClient = [clientA1, clientA2, clientA3, clientA4, clientA5];
			var answersTalent = [talentA1, talentA2, talentA3, talentA4];
			var answersCompetition = [competitionA1, competitionA2];

			var copiesClient = [clientC1,clientC2,clientC3,clientC4,clientC5];
			var copyTalent = "Continuar."
		// END INSERTING QUESTIONS AND ANSWERS
	// END QUESTION PACKS

	// AGENCIES PACKS

		// DECLARE AGENCIES VARIABLES
			var agencyName1,agencyName2,agencyName3,agencyName4,agencyName5,agencyName6,agencyName7,agencyName8,agencyName9,agencyName10,agencyName11,agencyNam12,agencyName13,agencyName14,agencyName15,agencyName16;

			
		// DECLARE AGENCIES DATA VARIABLES
			var agencyData1,agencyData2,agencyData3,agencyData4,agencyData5,agencyData6,agencyData7,agencyData8,agencyData9,agencyData10,agencyData11,agencyData12,agencyData13,agencyData14,agencyData15,agencyData16;

			

			// ESFERA AGENCY
			agenciesName1 = '<div class="agencyAdvice shortAdvice"> <h3>Esfera</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData1 = '<p> Esfera Comunicación <br> Luis Alberto Purata García <br> Director Asociado <br> <a href="mailto:luis.purata@esfera.cc">luis.purata@esfera.cc</a></p>';

			// CEROCUATRO AGENCY
			agenciesName2 = '<div class="agencyAdvice shortAdvice"> <h3>Cerocuatro</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData2 = '<p> Cero Cuatro <br> Rodrigo Noriega <br> Director General <br> <a href="mailto:rodrigo.noriega@cerocuatro.com">rodrigo.noriega@cerocuatro.com</a></p>';

			// BRANDCORP AGENCY
			agenciesName3 = '<div class="agencyAdvice shortAdvice"> <h3>Brandcorp</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData3 = '<p> Brandcorp <br> Juan de Dios Mayorquín <br> CEO <br> <a href="mailto:juand@brandcorp.com.mx">juand@brandcorp.com.mx</a></p>';

			// VÉRTICE AGENCY
			agenciesName4 = '<div class="agencyAdvice shortAdvice"> <h3>Vértice</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData4 = '<p> Vértice <br> Javier Álvarez <br> Director General <br> <a href="mailto:javier.alvarez@verticecom.com">javier.alvarez@verticecom.com</a></p>';

			// ALQUIMIA AGENCY
			agenciesName5 = '<div class="agencyAdvice shortAdvice"> <h3>Alquimia</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData5 = '<p> Alquimia <br> Alejandro Rodríguez <br> Director General <br> <a href="mailto:alvidrez@alquimiag.com">alvidrez@alquimiag.com</a></p>';

			// KP AGENCY
			agenciesName6 = '<div class="agencyAdvice shortAdvice"> <h3>KP</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData6 = '<p> KP <br> Hugo Pulido <br> Fundador <br> <a href="mailto:pulido@kp.com.mx">pulido@kp.com.mx</a></p>';

			// LEO BURNETT AGENCY
			agenciesName7 = '<div class="agencyAdvice shortAdvice"> <h3>Leo Burnett</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData7 = '<p> Leo Burnett <br> Pablo de Arteaga <br> CEO <br> <a href="http://www.leoburnett.com/" target="_blank">http://www.leoburnett.com/</a></p>';

			// J. WALTER THOMPSON AGENCY
			agenciesName8 = '<div class="agencyAdvice longAdvice"> <h3>J. Walter Thompson</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData8 = '<p> J. Walter Thompson <br> Mariate Arnal <br> CEO <br> <a href="https://www.jwt.com/mexicocity/" target="_blank">https://www.jwt.com/mexicocity/</a></p>';

			// YOUNG & RUBICAM AGENCY
			agenciesName9 = '<div class="agencyAdvice longAdvice"> <h3>Young & Rubicam</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData9 = '<p> Young & Rubicam <br> Juan Bonilla <br> Presidente <br> <a href="http://www.yr.com.mx/" target="_blank">http://www.yr.com.mx/</a></p>';

			// ANÓNIMO AGENCY
			agenciesName10 = '<div class="agencyAdvice shortAdvice"> <h3>Anónimo</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData10 = '<p> Anónimo <br> Raúl Cardos <br> Fundador <br> <a href="mailto:raul@anonimo.mx">raul@anonimo.mx</a></p>';

			// FLOCK AGENCY
			agenciesName11 = '<div class="agencyAdvice shortAdvice"> <h3>Flock</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData11 = '<p> Flock <br> Sebastian Tonda <br> CEO </p>';

			// GRUPO W AGENCY
			agenciesName12 = '<div class="agencyAdvice shortAdvice"> <h3>Grupo W</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData12 = '<p> Grupo W <br> Ulises Valencia <br> Director <br> <a href="mailto:uvalencia@grupow.com">uvalencia@grupow.com</a></p>';

			// DDB AGENCY
			agenciesName13 = '<div class="agencyAdvice shortAdvice"> <h3>DDB</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData13 = '<p> DDB <br> Matías del Campo <br> CEO <br> </p>';

			// BBDO AGENCY
			agenciesName14 = '<div class="agencyAdvice shortAdvice"> <h3>BBDO</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData14 = '<p> BBDO <br> Carlos Vaca <br> CEO </p>';

			// TERÁN/TBWA AGENCY
			agenciesName15 = '<div class="agencyAdvice shortAdvice"> <h3>Terán/TBWA</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agenciesData15 = '<p> Terán/TBWA <br> José Alberto Terán <br> CEO <br> </p>';

			// MISCHTECH AGENCY
			agenciesName16 = '<div class="agencyAdvice shortAdvice"> <h3>Mischtech</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agenciesData16 = '<p> Mischtech <br> Edgardo López <br> CEO <br> <a href="mailto:edgardo@mishtech.com">edgardo@mishtech.com</a> </p>';	

			

			// INSERT AGENCIES NAMES AND DATA
				var agenciesName = [agencyName1,agencyName2,agencyName3,agencyName4,agencyName5,agencyName6,agencyName7,agencyName8,agencyName9,agencyName10,agencyName11,agencyNam12,agencyName13,agencyName14,agencyName15,agencyName16];

				var agenciesData = [agencyData1,agencyData2,agencyData3,agencyData4,agencyData5,agencyData6,agencyData7,agencyData8,agencyData9,agencyData10,agencyData11,agencyData12,agencyData13,agencyData14,agencyData15,agencyData16];
			// END INSERT AGENCIES NAMES AND DATA
	// END AGENCIES PACKS


	console.log("This will be the first question for Clients: " + questionsClient[selectedClientQA1]);
	console.log("And this will be the first answer for Clients: " + answersClient[selectedClientQA1]);

	console.log("This will be the first question for Talents: " + questionsTalent[selectedTalentQA1]);
	console.log("And this will be the first answer for Talents: " + answersTalent[selectedTalentQA1]);

			
	// WORKFLOW PAGE
		$('#startWeb').click(function(){
			$('#welcomePage').addClass('crystal');
			$('#welcomePage').addClass('passedPage');
			$('#questions3').removeClass('waitingPage');

			setTimeout(function(){
				$('#questions3').find('.cardsWrapper').removeClass('compactCardsWrapper');

				$('#questions3').find('.leftCard').addClass('leftThirdCard');
				$('#questions3').find('.centerCard').addClass('centerThirdCard');
				$('#questions3').find('.rightCard').addClass('rightThirdCard');
			},1000);
		});

		//////////////////////////////// INTRO QUESTIONS ////////////////////////////////

		// CLIENT CARD WORKFLOW
			$('#cardCliente').click(function(){
				$('#firstBlankQuestion').append(questionsClient[selectedClientQA1]);
				$('#firstBlankQuestion').addClass('clientQ' + selectedClientQA1);

				$('#firstBlankAnswer').append(answersClient[selectedClientQA1]);
				$('#firstBlankAnswer').addClass('clientA' + selectedClientQA1);

				$('#firstBlankCopy').append(copiesClient[selectedClientQA1]);
				$('#firstAdviceClick').addClass('clientC' + selectedClientQA1);




				$('#secondBlankQuestion').append(questionsClient[selectedClientQA2]);
				$('#secondBlankQuestion').addClass('clientQ' + selectedClientQA2);

				$('#secondBlankAnswer').append(answersClient[selectedClientQA2]);
				$('#secondBlankAnswer').addClass('clientA' + selectedClientQA2);

				$('#secondBlankCopy').append(copiesClient[selectedClientQA2]);
				$('#secondAdviceClick').addClass('clientC' + selectedClientQA2);




				$('#thirdBlankQuestion').append(questionsClient[selectedClientQA3]);
				$('#thirdBlankQuestion').addClass('clientQ' + selectedClientQA3);

				$('#thirdBlankAnswer').append(answersClient[selectedClientQA3]);
				$('#thirdBlankAnswer').addClass('clientA' + selectedClientQA3);

				$('#thirdBlankCopy').append(copiesClient[selectedClientQA3]);
				$('#thirdAdviceClick').addClass('clientC' + selectedClientQA3);


				$('#questions3').addClass('passedPage');
				$('#FirstQuestion').removeClass('waitingPage');
				


				if (selectedClientQA1 == 3){

					$('#firstYesCard').addClass('correct1');
					$('#firstNoCard').addClass('wrong1');
				} else {
					$('#firstYesCard').addClass('wrong1');
					$('#firstNoCard').addClass('correct1');
				}

				$('.correct1').click(function(){
					$('#FirstQuestion').addClass('passedPage');
					$('#SecondQuestion').removeClass('waitingPage');
				});
				$('.wrong1').click(function(){
					$('#FirstQuestion').addClass('passedPage');
					$('#advice1').removeClass('waitingPage');
				});



				if (selectedClientQA2 == 3){

					$('#secondYesCard').addClass('correct2');
					$('#secondNoCard').addClass('wrong2');
				} else {
					$('#secondYesCard').addClass('wrong2');
					$('#secondNoCard').addClass('correct2');
				}

				$('.correct2').click(function(){
					$('#SecondQuestion').addClass('passedPage');
					$('#ThirdQuestion').removeClass('waitingPage');
				});
				$('.wrong2').click(function(){
					$('#SecondQuestion').addClass('passedPage');
					$('#advice2').removeClass('waitingPage');
				});



				if (selectedClientQA3 == 3){

					$('#thirdYesCard').addClass('correct3');
					$('#thirdNoCard').addClass('wrong3');
				} else {
					$('#thirdYesCard').addClass('wrong3');
					$('#thirdNoCard').addClass('correct3');
				}

				$('.correct3').click(function(){
					$('#ThirdQuestion').addClass('passedPage');
					// $('#ThirdQuestion').removeClass('waitingPage');
				});
				$('.wrong3').click(function(){
					$('#ThirdQuestion').addClass('passedPage');
					$('#advice3').removeClass('waitingPage');
				});
			});

		// END CLIENT CARD



		// TALENT CARD WORKFLOW
			$('#cardTalento').click(function(){
				$('#firstBlankQuestion').append("Así que ¿Quieres trabajar con nosotros? <br>");
				$('#firstBlankQuestion').append(questionsTalent[selectedTalentQA1]);
				$('#firstBlankQuestion').addClass('bigQuestion');

				$('#firstBlankAnswer').append(answersTalent[selectedTalentQA1]);
				$('#firstBlankAnswer').addClass('mediumQuestion');



				$('#secondBlankQuestion').append(questionsTalent[selectedTalentQA2]);
				$('#secondBlankQuestion').addClass('bigQuestion');

				$('#secondBlankAnswer').append(answersTalent[selectedTalentQA2]);
				$('#secondBlankAnswer').addClass('mediumQuestion');



				$('#thirdBlankQuestion').append(questionsTalent[selectedTalentQA3]);
				$('#thirdBlankQuestion').addClass('bigQuestion');

				$('#thirdBlankAnswer').append(answersTalent[selectedTalentQA3]);
				$('#thirdBlankAnswer').addClass('mediumQuestion');




				$('#firstAdviceClick').addClass('xsFooter');
				$('#firstBlankCopy').append(copyTalent);
				$('#secondAdviceClick').addClass('xsFooter');
				$('#secondBlankCopy').append(copyTalent);
				$('#thirdAdviceClick').addClass('xsFooter');
				$('#thirdBlankCopy').append(copyTalent);

				$('#questions3').addClass('passedPage');
				$('#FirstQuestion').removeClass('waitingPage');
				


				if (selectedTalentQA1 == 3){

					$('#firstYesCard').addClass('correct1');
					$('#firstNoCard').addClass('wrong1');
				} else {
					$('#firstYesCard').addClass('wrong1');
					$('#firstNoCard').addClass('correct1');
				}

				$('.correct1').click(function(){
					$('#FirstQuestion').addClass('passedPage');
					$('#SecondQuestion').removeClass('waitingPage');
				});
				$('.wrong1').click(function(){
					$('#FirstQuestion').addClass('passedPage');
					$('#advice1').removeClass('waitingPage');
				});



				if (selectedTalentQA2 == 3){

					$('#secondYesCard').addClass('correct2');
					$('#secondNoCard').addClass('wrong2');
				} else {
					$('#secondYesCard').addClass('wrong2');
					$('#secondNoCard').addClass('correct2');
				}

				$('.correct2').click(function(){
					$('#SecondQuestion').addClass('passedPage');
					$('#ThirdQuestion').removeClass('waitingPage');
				});
				$('.wrong2').click(function(){
					$('#SecondQuestion').addClass('passedPage');
					$('#advice2').removeClass('waitingPage');
				});



				if (selectedTalentQA3 == 3){

					$('#thirdYesCard').addClass('correct3');
					$('#thirdNoCard').addClass('wrong3');
				} else {
					$('#thirdYesCard').addClass('wrong3');
					$('#thirdNoCard').addClass('correct3');
				}

				$('.correct3').click(function(){
					$('#ThirdQuestion').addClass('passedPage');
					// $('#ThirdQuestion').removeClass('waitingPage');
				});
				$('.wrong3').click(function(){
					$('#ThirdQuestion').addClass('passedPage');
					$('#advice3').removeClass('waitingPage');
				});
			});
		// END TALENT CARD



		// COMPETITION CARD WORKFLOW
			$('#cardCompetencia').click(function(){
				$('#firstBlankQuestion').append(questionsCompetition[0]);
				$('#firstBlankQuestion').addClass('smallQuestion');

				$('#questions3').addClass('passedPage');
				$('#FirstQuestion').removeClass('waitingPage');

				$('#firstYesCard').addClass('correct1');
				$('#firstNoCard').addClass('wrong1');
			});
		// END COMPETITION CARD



		// FIRST QUESTION

		$('#firstAdviceClick').click(function(){
			$('#advice1').addClass('passedPage');
			$('#SecondQuestion').removeClass('waitingPage');
		});





		// SECOND QUESTION
		$('#secondAdviceClick').click(function(){
			$('#advice2').addClass('passedPage');
			$('#ThirdQuestion').removeClass('waitingPage');
		});




		// THIRD QUESTION
		$('#thirdAdviceClick').click(function(){
			$('#advice3').addClass('passedPage');
			// if
		});
	// END WORKFLOW PAGE




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