/*
// Toute la page est chargée :
$(document).ready(function() {
	$('#letter-h a').click(function() {
		$('#dictionary').load('h.html');
		return false;
	});
});
*/

// Seule les éléments pertinents sont chargées :
$(document).ready(function() {
	$('#letter-h a').click(function() {
		$('#dictionary').hide().load('h.html .entry', function() {
			$(this).fadeIn(1000);
			console.log('fadeIn de 1000 milisecondes !');
			console.log(h.html);
		});
		return false;
	});
});