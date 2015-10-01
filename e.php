<?php
$entries = array(
	'ÉCRIRE' => array(
		'part' => 'v. tr.',
		'definition' => "Un savant, connu par un nasillement extraordinaire,
		assistait à la lecture d'un ouvrage historique. -- Cet ouvrage est mal
		écrit, s'écria-t-il, un style prétentieux, plein d'affectation ! Il faut
		avant tout écrire comme on parle. -- C'est fort bien, dit un ami de
		l'auteur, mais alors, vous qui parlez du nez, vous devez écrire de
		même.",
	),
	'EFFORT' => array(
		'part' => 'n.',
		'definition' => "Voyant un homme qui avait le nez très-gros, Odry disait :
		 En faisant cet homme-là la nature a fait un nez fort.",
	),
	'ÉTÉ' => array(
		'part' => 'n.',
		'definition' => "On boit tant de thé en hiver dans les soirées de Londres,
		qu'on a dit que les Anglais faisaient de l'hiver la saison des thés.",
	),
	'EXÉCUTIF' => array(
		'part' => 'n.',
		'definition' => "Quand l'Assemblée constituante eut restreint, comme on
		sait, l'autorité royale de Louis XVI, on fit cette épigramme :",
		'quote' => array(
		"Entre savants, quelquefois on dispute.",
		"D'où vient ce nom : pouvoir exécutif",
		"Que donne au roi le corps législatif ?",
		"Eh ! le voici : trop faible pour la lutte,",
		"C'est un pouvoir, hélas ! qui s'exécute.",
		),
	),
);


$term = mb_strtoupper($_REQUEST['term'], 'utf-8');
if (isset($entries[$term])) {
	$entry = $entries[$term];
	$html = '<div class="entry">';
	$html .= '<h3 class="term">';
	$html .= $term;
	$html .= '</h3>';
	$html .= '<div class="part">';
	$html .= $entry['part'];
	$html .= '</div>';
	$html .= '<div class="definition">';
	$html .= $entry['definition'];
	if (isset($entry['quote'])) {
		$html .= '<div class="quote">';
		foreach ($entry['quote'] as $line) {
			$html .= '<div class="quote-line">'. $line .'</div>';
		}
		if (isset($entry['author'])) {
			$html .= '<div class="quote-author">'. $entry['author'].'</div>';
		}
		$html .= '</div>';
	}
	$html .= '</div>';
	$html .= '</div>';
	print($html);
}