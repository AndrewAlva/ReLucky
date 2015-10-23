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
				talentA4 = 'Apreciamos el talento pero nos gusta más el hambre de ser, en Lucky más que books buscamos ganas de trascender, las siguientes agencias buscan solo talento.';
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
			agencyName1 = '<div class="agencyAdvice shortAdvice"> <h3>Esfera</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agencyData1 = '<p> Esfera Comunicación <br> Luis Alberto Purata García <br> Director Asociado <br> <a href="mailto:luis.purata@esfera.cc">luis.purata@esfera.cc</a></p>';

			// CEROCUATRO AGENCY
			agencyName2 = '<div class="agencyAdvice shortAdvice"> <h3>Cerocuatro</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agencyData2 = '<p> Cero Cuatro <br> Rodrigo Noriega <br> Director General <br> <a href="mailto:rodrigo.noriega@cerocuatro.com">rodrigo.noriega@cerocuatro.com</a></p>';

			// BRANDCORP AGENCY
			agencyName3 = '<div class="agencyAdvice shortAdvice"> <h3>Brandcorp</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agencyData3 = '<p> Brandcorp <br> Juan de Dios Mayorquín <br> CEO <br> <a href="mailto:juand@brandcorp.com.mx">juand@brandcorp.com.mx</a></p>';

			// VÉRTICE AGENCY
			agencyName4 = '<div class="agencyAdvice shortAdvice"> <h3>Vértice</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agencyData4 = '<p> Vértice <br> Javier Álvarez <br> Director General <br> <a href="mailto:javier.alvarez@verticecom.com">javier.alvarez@verticecom.com</a></p>';

			// ALQUIMIA AGENCY
			agencyName5 = '<div class="agencyAdvice shortAdvice"> <h3>Alquimia</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agencyData5 = '<p> Alquimia <br> Alejandro Rodríguez <br> Director General <br> <a href="mailto:alvidrez@alquimiag.com">alvidrez@alquimiag.com</a></p>';

			// KP AGENCY
			agencyName6 = '<div class="agencyAdvice shortAdvice"> <h3>KP</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agencyData6 = '<p> KP <br> Hugo Pulido <br> Fundador <br> <a href="mailto:pulido@kp.com.mx">pulido@kp.com.mx</a></p>';

			// LEO BURNETT AGENCY
			agencyName7 = '<div class="agencyAdvice shortAdvice"> <h3>Leo Burnett</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agencyData7 = '<p> Leo Burnett <br> Pablo de Arteaga <br> CEO <br> <a href="http://www.leoburnett.com/" target="_blank">http://www.leoburnett.com/</a></p>';

			// J. WALTER THOMPSON AGENCY
			agencyName8 = '<div class="agencyAdvice longAdvice"> <h3>J. Walter Thompson</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agencyData8 = '<p> J. Walter Thompson <br> Mariate Arnal <br> CEO <br> <a href="https://www.jwt.com/mexicocity/" target="_blank">https://www.jwt.com/mexicocity/</a></p>';

			// YOUNG & RUBICAM AGENCY
			agencyName9 = '<div class="agencyAdvice longAdvice"> <h3>Young & Rubicam</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agencyData9 = '<p> Young & Rubicam <br> Juan Bonilla <br> Presidente <br> <a href="http://www.yr.com.mx/" target="_blank">http://www.yr.com.mx/</a></p>';

			// ANÓNIMO AGENCY
			agencyName10 = '<div class="agencyAdvice shortAdvice"> <h3>Anónimo</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agencyData10 = '<p> Anónimo <br> Raúl Cardos <br> Fundador <br> <a href="mailto:raul@anonimo.mx">raul@anonimo.mx</a></p>';

			// FLOCK AGENCY
			agencyName11 = '<div class="agencyAdvice shortAdvice"> <h3>Flock</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agencyData11 = '<p> Flock <br> Sebastian Tonda <br> CEO </p>';

			// GRUPO W AGENCY
			agencyName12 = '<div class="agencyAdvice shortAdvice"> <h3>Grupo W</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agencyData12 = '<p> Grupo W <br> Ulises Valencia <br> Director <br> <a href="mailto:uvalencia@grupow.com">uvalencia@grupow.com</a></p>';

			// DDB AGENCY
			agencyName13 = '<div class="agencyAdvice shortAdvice"> <h3>DDB</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agencyData13 = '<p> DDB <br> Matías del Campo <br> CEO <br> </p>';

			// BBDO AGENCY
			agencyName14 = '<div class="agencyAdvice shortAdvice"> <h3>BBDO</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agencyData14 = '<p> BBDO <br> Carlos Vaca <br> CEO </p>';

			// TERÁN/TBWA AGENCY
			agencyName15 = '<div class="agencyAdvice shortAdvice"> <h3>Terán/TBWA</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>'; 
			agencyData15 = '<p> Terán/TBWA <br> José Alberto Terán <br> CEO <br> </p>';

			// MISCHTECH AGENCY
			agencyName16 = '<div class="agencyAdvice shortAdvice"> <h3>Mischtech</h3> <div class="underlineWrap"> <div class="underLine"></div> </div> </div>';
			agencyData16 = '<p> Mischtech <br> Edgardo López <br> CEO <br> <a href="mailto:edgardo@mishtech.com">edgardo@mishtech.com</a> </p>';	

			

			// INSERT AGENCIES NAMES AND DATA
				var agenciesName = [agencyName1,agencyName2,agencyName3,agencyName4,agencyName5,agencyName6,agencyName7,agencyName8,agencyName9,agencyName10,agencyName11,agencyName12,agencyName13,agencyName14,agencyName15,agencyName16];

				var agenciesData = [agencyData1,agencyData2,agencyData3,agencyData4,agencyData5,agencyData6,agencyData7,agencyData8,agencyData9,agencyData10,agencyData11,agencyData12,agencyData13,agencyData14,agencyData15,agencyData16];
			// END INSERT AGENCIES NAMES AND DATA

				var leftClientAgenciesNames = [agenciesName[0], agenciesName[3], agenciesName[6], agenciesName[9], agenciesName[12]];
				var centerClientAgenciesNames = [agenciesName[1], agenciesName[4], agenciesName[7], agenciesName[10], agenciesName[13]];
				var rightClientAgenciesNames = [agenciesName[2], agenciesName[5], agenciesName[8], agenciesName[11], agenciesName[14]];

				var leftClientAgenciesData = [agenciesData[0], agenciesData[3], agenciesData[6], agenciesData[9], agenciesData[12]];
				var centerClientAgenciesData = [agenciesData[1], agenciesData[4], agenciesData[7], agenciesData[10], agenciesData[13]];
				var rightClientAgenciesData = [agenciesData[2], agenciesData[5], agenciesData[8], agenciesData[11], agenciesData[14]];



				var leftTalentAgenciesNames = [agenciesName[13], agenciesName[2], agenciesName[4], agenciesName[15]];
				var centerTalentAgenciesNames = [agenciesName[4], agenciesName[1], agenciesName[5], agenciesName[2]];
				var rightTalentAgenciesNames = [agenciesName[1], agenciesName[0], agenciesName[3], agenciesName[3]];

				var leftTalentAgenciesData = [agenciesData[13], agenciesData[2], agenciesData[4], agenciesData[15]];
				var centerTalentAgenciesData = [agenciesData[4], agenciesData[1], agenciesData[5], agenciesData[2]];
				var rightTalentAgenciesData = [agenciesData[1], agenciesData[0], agenciesData[3], agenciesData[3]];
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

		var currentPath;
		var youLose = false; 
		// CLIENT CARD WORKFLOW
			$('#cardCliente').click(function(){
				currentPath = "client";

				$('#firstBlankQuestion').append(questionsClient[selectedClientQA1]);
				$('#firstBlankQuestion').addClass('clientQ' + selectedClientQA1);

				$('#firstBlankAnswer').append(answersClient[selectedClientQA1]);
				$('#firstBlankAnswer').addClass('clientA' + selectedClientQA1);

				$('#firstBlankCopy').append(copiesClient[selectedClientQA1]);
				$('#firstAdviceClick').addClass('clientC' + selectedClientQA1);

				$('#firstInsertAgencyName1').append(leftClientAgenciesNames[selectedClientQA1]);
				$('#firstInsertAgencyName2').append(centerClientAgenciesNames[selectedClientQA1]);
				$('#firstInsertAgencyName3').append(rightClientAgenciesNames[selectedClientQA1]);

				$('#firstInsertAgencyData1').append(leftClientAgenciesData[selectedClientQA1]);
				$('#firstInsertAgencyData2').append(centerClientAgenciesData[selectedClientQA1]);
				$('#firstInsertAgencyData3').append(rightClientAgenciesData[selectedClientQA1]);




				$('#secondBlankQuestion').append(questionsClient[selectedClientQA2]);
				$('#secondBlankQuestion').addClass('clientQ' + selectedClientQA2);

				$('#secondBlankAnswer').append(answersClient[selectedClientQA2]);
				$('#secondBlankAnswer').addClass('clientA' + selectedClientQA2);

				$('#secondBlankCopy').append(copiesClient[selectedClientQA2]);
				$('#secondAdviceClick').addClass('clientC' + selectedClientQA2);

				$('#secondInsertAgencyName1').append(leftClientAgenciesNames[selectedClientQA2]);
				$('#secondInsertAgencyName2').append(centerClientAgenciesNames[selectedClientQA2]);
				$('#secondInsertAgencyName3').append(rightClientAgenciesNames[selectedClientQA2]);

				$('#secondInsertAgencyData1').append(leftClientAgenciesData[selectedClientQA2]);
				$('#secondInsertAgencyData2').append(centerClientAgenciesData[selectedClientQA2]);
				$('#secondInsertAgencyData3').append(rightClientAgenciesData[selectedClientQA2]);




				$('#thirdBlankQuestion').append(questionsClient[selectedClientQA3]);
				$('#thirdBlankQuestion').addClass('clientQ' + selectedClientQA3);

				$('#thirdBlankAnswer').append(answersClient[selectedClientQA3]);
				$('#thirdBlankAnswer').addClass('clientA' + selectedClientQA3);

				$('#thirdBlankCopy').append(copiesClient[selectedClientQA3]);
				$('#thirdAdviceClick').addClass('clientC' + selectedClientQA3);

				$('#thirdInsertAgencyName1').append(leftClientAgenciesNames[selectedClientQA3]);
				$('#thirdInsertAgencyName2').append(centerClientAgenciesNames[selectedClientQA3]);
				$('#thirdInsertAgencyName3').append(rightClientAgenciesNames[selectedClientQA3]);

				$('#thirdInsertAgencyData1').append(leftClientAgenciesData[selectedClientQA3]);
				$('#thirdInsertAgencyData2').append(centerClientAgenciesData[selectedClientQA3]);
				$('#thirdInsertAgencyData3').append(rightClientAgenciesData[selectedClientQA3]);


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

					if (youLose == false){
						youLose = true;
					}
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

					if (youLose == false){
						youLose = true;
					} else {
						$('#SecondQuestion').addClass('crystal');
						$('#ThirdQuestion').addClass('crystal');
						$('#advice1').addClass('crystal');
						$('#advice2').addClass('crystal');
						$('#advice3').addClass('crystal');

						x.append(h + ":" + m);
						$('#wrongAnswer').removeClass('waitingPage');
						setTimeout(function(){
							alert("Lo sentimos, Lucky Ideas no es la agencia para ti te recomendamos ocupar mejor tu tiempo. El sitio ha sido bloqueado.");
							window.close();
						},3000);
					}
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
					$('#flyWithUs').removeClass('waitingPage');
				});
				$('.wrong3').click(function(){
					$('#ThirdQuestion').addClass('passedPage');
					$('#advice3').removeClass('waitingPage');

					if (youLose == false){
						youLose = true;
					} else {
						$('#SecondQuestion').addClass('crystal');
						$('#ThirdQuestion').addClass('crystal');
						$('#advice1').addClass('crystal');
						$('#advice2').addClass('crystal');
						$('#advice3').addClass('crystal');

						x.append(h + ":" + m);
						$('#wrongAnswer').removeClass('waitingPage');
						setTimeout(function(){
							alert("Lucky Ideas sugiere que no es la agencia para ti y te recomienda ocupar mejor tu tiempo. Has sido excluido del sitio.");
							window.close();
						},3000);
					}
				});
			});
		// END CLIENT CARD

		// WANT TO FLY WITH US WORKFLOW
			$('#cardFly').click(function(){
				$('#flyWithUs').addClass('passedPage');
				$('#embedStreaming').removeClass('waitingPage');
			});
		// END WANT TO FLY



		// TALENT CARD WORKFLOW
			$('#cardTalento').click(function(){
				currentPath = "talent";

				$('#firstBlankQuestion').append("Así que ¿Quieres trabajar con nosotros? <br>");
				$('#firstBlankQuestion').append(questionsTalent[selectedTalentQA1]);
				$('#firstBlankQuestion').addClass('talentQ' + selectedTalentQA1);
				$('#firstBlankQuestion').addClass('firstTalentQuestion');

				$('#firstBlankAnswer').append(answersTalent[selectedTalentQA1]);
				$('#firstBlankAnswer').addClass('talentA' + selectedTalentQA1);

				$('#firstInsertAgencyName1').append(leftTalentAgenciesNames[selectedTalentQA1]);
				$('#firstInsertAgencyName2').append(centerTalentAgenciesNames[selectedTalentQA1]);
				$('#firstInsertAgencyName3').append(rightTalentAgenciesNames[selectedTalentQA1]);

				$('#firstInsertAgencyData1').append(leftTalentAgenciesData[selectedTalentQA1]);
				$('#firstInsertAgencyData2').append(centerTalentAgenciesData[selectedTalentQA1]);
				$('#firstInsertAgencyData3').append(rightTalentAgenciesData[selectedTalentQA1]);



				$('#secondBlankQuestion').append(questionsTalent[selectedTalentQA2]);
				$('#secondBlankQuestion').addClass('talentQ' + selectedTalentQA2);

				$('#secondBlankAnswer').append(answersTalent[selectedTalentQA2]);
				$('#secondBlankAnswer').addClass('talentA' + selectedTalentQA2);

				$('#secondInsertAgencyName1').append(leftTalentAgenciesNames[selectedTalentQA2]);
				$('#secondInsertAgencyName2').append(centerTalentAgenciesNames[selectedTalentQA2]);
				$('#secondInsertAgencyName3').append(rightTalentAgenciesNames[selectedTalentQA2]);

				$('#secondInsertAgencyData1').append(leftTalentAgenciesData[selectedTalentQA2]);
				$('#secondInsertAgencyData2').append(centerTalentAgenciesData[selectedTalentQA2]);
				$('#secondInsertAgencyData3').append(rightTalentAgenciesData[selectedTalentQA2]);



				$('#thirdBlankQuestion').append(questionsTalent[selectedTalentQA3]);
				$('#thirdBlankQuestion').addClass('talentQ' + selectedTalentQA3);

				$('#thirdBlankAnswer').append(answersTalent[selectedTalentQA3]);
				$('#thirdBlankAnswer').addClass('talentA' + selectedTalentQA3);

				$('#thirdInsertAgencyName1').append(leftTalentAgenciesNames[selectedTalentQA3]);
				$('#thirdInsertAgencyName2').append(centerTalentAgenciesNames[selectedTalentQA3]);
				$('#thirdInsertAgencyName3').append(rightTalentAgenciesNames[selectedTalentQA3]);

				$('#thirdInsertAgencyData1').append(leftTalentAgenciesData[selectedTalentQA3]);
				$('#thirdInsertAgencyData2').append(centerTalentAgenciesData[selectedTalentQA3]);
				$('#thirdInsertAgencyData3').append(rightTalentAgenciesData[selectedTalentQA3]);




				$('#firstAdviceClick').addClass('talentC');
				$('#firstBlankCopy').append(copyTalent);
				$('#secondAdviceClick').addClass('talentC');
				$('#secondBlankCopy').append(copyTalent);
				$('#thirdAdviceClick').addClass('talentC');
				$('#thirdBlankCopy').append(copyTalent);

				$('#questions3').addClass('passedPage');
				$('#FirstQuestion').removeClass('waitingPage');
				


				if (selectedTalentQA1 == 3 || selectedTalentQA1 == 0){

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

					if (youLose == false){
						youLose = true;
					}
				});



				if (selectedTalentQA2 == 3 || selectedTalentQA2 == 0){

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
					if (youLose == false){
						youLose = true;
					} else {
						$('#SecondQuestion').addClass('crystal');
						$('#ThirdQuestion').addClass('crystal');
						$('#advice1').addClass('crystal');
						$('#advice2').addClass('crystal');
						$('#advice3').addClass('crystal');

						x.append(h + ":" + m);
						$('#wrongAnswer').removeClass('waitingPage');
						setTimeout(function(){
							alert("Lucky Ideas sugiere que no es la agencia para ti y te recomienda ocupar mejor tu tiempo. Has sido excluido del sitio.");
							window.close();
						},3000);
					}
				});



				if (selectedTalentQA3 == 3 || selectedTalentQA3 == 0){

					$('#thirdYesCard').addClass('correct3');
					$('#thirdNoCard').addClass('wrong3');
				} else {
					$('#thirdYesCard').addClass('wrong3');
					$('#thirdNoCard').addClass('correct3');
				}

				$('.correct3').click(function(){
					$('#ThirdQuestion').addClass('passedPage');
					$('#dob-sub').removeClass('waitingPage');
				});
				$('.wrong3').click(function(){
					$('#ThirdQuestion').addClass('passedPage');
					$('#advice3').removeClass('waitingPage');

					if (youLose == false){
						youLose = true;
					} else {
						$('#SecondQuestion').addClass('crystal');
						$('#ThirdQuestion').addClass('crystal');
						$('#advice1').addClass('crystal');
						$('#advice2').addClass('crystal');
						$('#advice3').addClass('crystal');

						x.append(h + ":" + m);
						$('#wrongAnswer').removeClass('waitingPage');
						setTimeout(function(){
							alert("Lucky Ideas sugiere que no es la agencia para ti y te recomienda ocupar mejor tu tiempo. Has sido excluido del sitio.");
							window.close();
						},3000);
					}
				});
			});
		// END TALENT CARD

		// DOBLADA O SUBTITULADA WORKFLOW
			$('.langCards').click(function(){
				$('#dob-sub').addClass('passedPage');
				$('#embedVideo').removeClass('waitingPage');
			});
		// END DOBLADA O SUBTITULADA

		// BRING GIFT CODE WORKFLOW
			$('#bringGiftCode').click(function(){
				$('#embedVideo').addClass('passedPage');
				$('#giftCode').removeClass('waitingPage');
			});

			$('#hideGiftCode').click(function(){
				$('#embedVideo').removeClass('passedPage');
				$('#giftCode').addClass('waitingPage');
			});
		// END BRING GIFT CODE



		// COMPETITION CARD WORKFLOW
			$('#cardCompetencia').click(function(){
				currentPath = "competition";

				$('#firstBlankQuestion').append(questionsCompetition[0]);
				$('#firstBlankQuestion').addClass('smallQuestion');

				$('#firstYesCard').addClass('correct1');
				$('#firstNoCard').addClass('wrong1');

				$('#questions3').addClass('passedPage');
				$('#FirstQuestion').removeClass('waitingPage');


				

				

				

				$('.correct1').click(function(){
					$('#FirstQuestion').addClass('passedPage');
					$('#SecondQuestion').removeClass('waitingPage');

					$('#secondBlankQuestion').append(questionsCompetition[1]);
					$('#secondBlankQuestion').addClass('smallQuestion');

					$('#secondYesCard').addClass('showPortfolioCard');
					$('#secondNoCard').addClass('showPortfolioCard');

					$('.showPortfolioCard').click(function(){
						$('#SecondQuestion').addClass('passedPage');
						$('#goPortfolioBlankAnswer').append(answersCompetition[1]);
						$('#goPortfolioBlankAnswer').addClass('mediumQuestion');
						$('#goLuckyPortfolio').removeClass('waitingPage');
					});

				});

				$('.wrong1').click(function(){
					$('#FirstQuestion').addClass('passedPage');
					$('#goPortfolioBlankAnswer').append(answersCompetition[0]);
					$('#goPortfolioBlankAnswer').addClass('mediumQuestion');
					$('#goLuckyPortfolio').removeClass('waitingPage');
				});
			});
		// END COMPETITION CARD

		// GO PORTFOLIO CARD WORKFLOW
			$('#cardPortfolio').click(function(){
				window.location.href = "https://instagram.com/luckyideas/";
			});
		// END GO PORTFOLIO CARD



		// FIRST QUESTION ADVICES WORKFLOW

			$('#firstAdviceClick').click(function(){
				$('#advice1').addClass('passedPage');
				$('#SecondQuestion').removeClass('waitingPage');
			});

			
			$('.firstAdviceCards').click(function(event) {
				$(this).addClass('bringToFront');
				
				$(this).find('.agencyData').removeClass('notHere');

				$('.firstAdviceCards').addClass('adviceCardSelected');
				$('.firstAdviceCards').addClass('noPointer');
				$('.firstAdviceCards').find('.cardDropShadow').addClass('adviceCardDropShadowHover');
				

				$('.firstAdviceCards').find('.upMove').removeClass('goUpper');
				$('.firstAdviceCards').find('.upMove').removeClass('upMove');

				$('.firstAdviceCards').find('.hoverAppear').addClass('crystal');
				$('.firstAdviceCards').find('.shrinkMove').addClass('crystal');
				$('.firstAdviceCards').find('h3').addClass('crystal');
				$('.firstAdviceCards').find('.underLine').addClass('crystal');

				setTimeout(function(){
					$('.firstAdviceCards').find('.hoverAppear').remove();
					$('.firstAdviceCards').find('.shrinkMove').remove();
					$('.firstAdviceCards').find('h3').remove();
					$('.firstAdviceCards').find('.underLine').remove();
					$('.firstAdviceCards').find('.agencyData').removeClass('crystal');
				},600);

				
			});
		// END FIRST QUESTION ADVICES WORKFLOW





		// SECOND QUESTION ADVICES WORKFLOW
			$('#secondAdviceClick').click(function(){
				$('#advice2').addClass('passedPage');
				$('#ThirdQuestion').removeClass('waitingPage');
			});

			$('.secondAdviceCards').click(function(event) {
				$(this).addClass('bringToFront');
				
				$(this).find('.agencyData').removeClass('notHere');

				$('.secondAdviceCards').addClass('adviceCardSelected');
				$('.secondAdviceCards').addClass('noPointer');
				$('.secondAdviceCards').find('.cardDropShadow').addClass('adviceCardDropShadowHover');
				

				$('.secondAdviceCards').find('.upMove').removeClass('goUpper');
				$('.secondAdviceCards').find('.upMove').removeClass('upMove');

				$('.secondAdviceCards').find('.hoverAppear').addClass('crystal');
				$('.secondAdviceCards').find('.shrinkMove').addClass('crystal');
				$('.secondAdviceCards').find('h3').addClass('crystal');
				$('.secondAdviceCards').find('.underLine').addClass('crystal');

				setTimeout(function(){
					$('.secondAdviceCards').find('.hoverAppear').remove();
					$('.secondAdviceCards').find('.shrinkMove').remove();
					$('.secondAdviceCards').find('h3').remove();
					$('.secondAdviceCards').find('.underLine').remove();
					$('.secondAdviceCards').find('.agencyData').removeClass('crystal');
				},600);

				
			});
		// END SECOND QUESTION ADVICES WORKFLOW




		// THIRD QUESTION ADVICES WORKFLOW
			$('#thirdAdviceClick').click(function(){
				$('#advice3').addClass('passedPage');
				if (currentPath == "client"){
					$('#flyWithUs').removeClass('waitingPage');

				} else if (currentPath == "talent"){
					$('#dob-sub').removeClass('waitingPage');

				} else {
					alert("currentPath variable is not working");
				}
			});

			$('.thirdAdviceCards').click(function(event) {
				$(this).addClass('bringToFront');
				
				$(this).find('.agencyData').removeClass('notHere');

				$('.thirdAdviceCards').addClass('adviceCardSelected');
				$('.thirdAdviceCards').addClass('noPointer');
				$('.thirdAdviceCards').find('.cardDropShadow').addClass('adviceCardDropShadowHover');
				

				$('.thirdAdviceCards').find('.upMove').removeClass('goUpper');
				$('.thirdAdviceCards').find('.upMove').removeClass('upMove');

				$('.thirdAdviceCards').find('.hoverAppear').addClass('crystal');
				$('.thirdAdviceCards').find('.shrinkMove').addClass('crystal');
				$('.thirdAdviceCards').find('h3').addClass('crystal');
				$('.thirdAdviceCards').find('.underLine').addClass('crystal');

				setTimeout(function(){
					$('.thirdAdviceCards').find('.hoverAppear').remove();
					$('.thirdAdviceCards').find('.shrinkMove').remove();
					$('.thirdAdviceCards').find('h3').remove();
					$('.thirdAdviceCards').find('.underLine').remove();
					$('.thirdAdviceCards').find('.agencyData').removeClass('crystal');
				},600);

			
			});
		// END THIRD QUESTION ADVICES WORKFLOW



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
		    	// x.append(h + ":" + m);
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