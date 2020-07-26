/* Descrizione:
	Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni: )
Lo slider prevederà due frecce(icone) che permettono di scorrere tra le immagini dello slider
Utilizziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire qual è l’ immagine attuale da visualizzare nello slider
Bonus:
	Clicchiamo sui pallini e mostriamo l’ immagine corrispondente
Generiamo i pallini con JS
Consiglio del giorno:
	Come sempre è importante usare la documentazione di jQuery per scoprire / rinfrescare memoria sulle funzioni che potrebbero esserci utili. */
// 1. associare a next una funzione
// 2. alla pressione del tasto devo togliere la classe active al pulsante corrente e spostarla al successivo
// 3. per ogni pulsante devo verificare che non abbia la classe last, in tal caso devo ripartire dal primo come successivo
// 3.1 faccio la stessa cosa anche per i pallini del nav
// 4. procedo all'inverso pulsante prev


// Inizializzo document ready
$(document).ready(function () {

	// Associo a .next all'evento .click la chiamata alla funzione di callback nextImg
	$('.next').click(
		function () {
			nextImg();

		});

	// Associo a .prev la chiamata alla funzione prevImg
	$('.prev').click(
		function () {
			prevImg();
		});


	/******************************** BONUS SECTION ***************************/
	/* Clicchiamo sui pallini e mostriamo l’ immagine corrispondente */
	/* Funzione anonima al click event */

	// 0 creo una funzione al click del tasto (pallino) che:

	// 1 rimuove le classi active da tutti gli elementi
	// 2 trova l'indice del pulsante corrente (quello cliccato) - INDEX
	// 3 aggiunge la classe active al tasto corrente
	// 4 all'immagine con indice uguale all'indice del tasto cliccato aggiunge classe active - EQ

	$('.nav i').click(function () {
		$('.active').removeClass('active');
		let circleDot = $(this).index();
		$(this).addClass('active');
		$('img').eq(circleDot).addClass('active');
	})
	// N.B.
	// utilizzo .index() per trovare l'indice dell'elemento corrente
	// ed .eq() per trovare l'immagine corrispondete a tale indice e settarla ad active



	/* Stesso metodo ma creando una funzione setCircle */

	/* $('.nav i').click(
		function () {
			setCircle(this);
		});

	function setCircle(obj) {
		$('.active').removeClass('active');
		let circleIndex = $(obj).index();
		$(obj).addClass('active');
		$('img').eq(circleIndex).addClass('active');
	}
 */

	/* ********************************************************************** */


	/* FUNZIONI */


	// funzione nextImg - toglie la classe active al nodo corrente e la mette al successivo 
	function nextImg() {
		// associo ad una variabile locale imgActive il nodo DOM .active
		let imgActive = $('.images img.active');

		// stessa cosa per i pallini del nav
		let circleActive = $('.nav i.active');
		// rimuovo dal imgActive la classe active
		imgActive.removeClass('active');
		circleActive.removeClass('active');

		// blocco if
		// se l'elemento corrente (ex .active) ha ANCHE CLASSE .last
		// associo la classe .active al primo elemento dello slider images
		if (imgActive.hasClass('last')) {
			$('.images img.first').addClass('active');
			$('.nav i.first').addClass('active');
			// altrimenti  l'associo al successivo
		} else {
			imgActive.next().addClass('active');
			circleActive.next().addClass('active');
		}
	}



	// funzione prevImg - toglie la classe active al nodo corrente e la mette al precedente 
	function prevImg() {
		// def var locali
		let imgActive = $('.images img.active');
		let circleActive = $('.nav i.active');
		// rimozione class .active
		imgActive.removeClass('active');
		circleActive.removeClass('active');
		// if block
		if (imgActive.hasClass('first')) {
			$('.images img.last').addClass('active');
			$('.nav i.last').addClass('active');
		} else {
			imgActive.prev().addClass('active');
			circleActive.prev().addClass('active')
		}
	}
});