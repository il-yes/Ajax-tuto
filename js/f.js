$(document).ready(function() {
	$('#letter-f form').submit(function() {
		var terme = $('#term').val();
		console.log('requette ' +  terme + ' envoyée au serveur.');
		$('#dictionary').load('f.php', {'term': $('input[name="term"]').val()});
		return false;
	});
});