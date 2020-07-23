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
// 4. procedo all'inverso pulsante prev


// 0. inizializzo document ready
$(document).ready(function () {



	// 1. associo a .next all'evento .click la chiamata alla funzione di callback nextImg
	$('.next').click(
		function () {
			nextImg();

		});



	/* funzione */


	// funzione nextImg - toglie la classe active al nodo corrente e la mette al successivo 
	function nextImg() {
		// associo ad una variabile locale imgActive il nodo DOM .active
		let imgActive = $('.images img.active');
		// rimuovo dal imgActive la classe active
		imgActive.removeClass('active');

		// blocco if
		// se l'elemento corrente (ex .active) ha ANCHE CLASSE .last
		// associo la classe .active al primo elemento dello slider images
		if (imgActive.hasClass('last')) {
			$('.images img.first').addClass('active');
			// altrimenti  l'associo al successivo
		} else {
			imgActive.next().addClass('active');
		}


	}

	// funzione prevImg - toglie la classe active al nodo corrente e la mette al precedente 
	function prevImg() {
		console.log('prova');
		let imgActive = $('.images img.active');
		imgActive.removeClass('active');
		imgActive.prev().addClass('active');
	}




});