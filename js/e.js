// Methode GET :
$(document).ready(function() {
	$('#letter-e a').click(function() {
		$.get('e.php', {'term': $(this).text()}, function(data) {
			//$('#dictionary').html(data);
			afficher(data);
			console.log("methode 'get' utilisée !");
		});
		return false;
	});
});



/*
// Methode POST :
$(document).ready(function() {
	$('#letter-e a').click(function() {
		$('#dictionary').load('e.php', {'term': $(this).text()});
		console.log("methode 'post' utilisée !");
		return false;
	});
});
*/


function afficher(data){
	//$(".loading").remove(); // On supprime le loader
	$("#dictionary").fadeOut(300,function(){
		$("#dictionary").empty();
		$("#dictionary").append(data);
		$("#dictionary").fadeIn(1000);
	})
}