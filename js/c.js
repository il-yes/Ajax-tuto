var entries = [
	{
	"term": "CHAIR",
	"part": "n.",
	"definition": "M. Ch. Monselet, après avoir entendu M. Saisset,..."
	},
	{
	"term": "CHALEUR",
	"part": "n.",
	"definition": "Bautru se promenait le chapeau à la main, par un soleil..."
	},
	{
	"term": "CHANT",
	"part": "n.",
	"definition": "On dit que le rossignol ne chante plus lorsqu'il est..."
	},
	{
	"term": "CHAUDRON",
	"part": "n.",
	"definition": "Brunet disait que le vase qu'on appelle chaudron..."
	},
	{
	"term": "CHER",
	"part": "n.",
	"definition": "C'est un département où l'on ne peut pas vivre..."
	},
	{
	"term": "COMBLÉ",
	"part": "adj.",
	"definition": "Un très-gros homme, arrêté au bord d'un fossé, disait :..."
	}
];
var html = '';
$.each(entries, function() {
html += '<div class="entry">';
html += '<h3 class="term">' + this['term'] + '</h3>';
html += '<div class="part">' + this['part'] + '</div>';
html += '<div class="definition">' + this['definition'] + '</div>';
html += '</div>';
});
function afficher(data){
	//$(".loading").remove(); // On supprime le loader
	$("#dictionary").fadeOut(300,function(){
		$("#dictionary").empty();
		$("#dictionary").append(data);
		$("#dictionary").fadeIn(1000);
	})
}
//$('#dictionary').html(html).fadeIn(1000);
afficher(html);