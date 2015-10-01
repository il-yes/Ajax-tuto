
$(document).ready(function() {
	// Gestion du loading
	$('<div id="loading">Chargement en cours...</div>')
	.insertBefore('#dictionary')
	.ajaxStart(function() {
		$(this).show();
	}).ajaxStop(function() {
		$(this).hide();
	});

/*
	$('#letter-a a').click(function() {
		$('#dictionary').hide().load('a.html', function() {
			$(this).fadeIn(1000);
			console.log('fadeIn de 1000 milisecondes !');
		});
		console.log('Définitions chargées !');
		return false;
	});
*/

// Methode Ajax de bas niveau :
	$('#letter-a a').click(function() {
		$.ajax({
			url: 'a.html',
			type: 'GET',
			dataType: 'html',
			success: function(html) {
				//$('#dictionary').html(data);
				afficher(html);
			}
		});
	});


});

function afficher(data){
	//$(".loading").remove(); // On supprime le loader
	$("#dictionary").fadeOut(300,function(){
		$("#dictionary").empty();
		$("#dictionary").append(data);
		$("#dictionary").fadeIn(1000);
	})
}