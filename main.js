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



// 1. 
console.log('prova');

$(document).ready(function () {
	$('.next').click(
		function () {
			console.log('next-pressed');

		});
});








/* funzione */