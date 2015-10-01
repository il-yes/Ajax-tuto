<?php

$entries = array(
	'Fenetre' => array(
		'part' => 'n. f.',
		'definition' => "Baie comportant une fermeture vitrée, pratiquée dans un mur d'un bâtiment pour permettre l'entrée de la lumière, la vision vers l'extérieur et, habituellement, l'aération.",
	),
	'Fluer' => array(
		'part' => 'v. t.',
		'definition' => "Couler, s'écouler, se répandre, en parlant de l'eau, d'une odeur, etc.",
	),
	'Frire' => array(
		'part' => 'v. t.',
		'definition' => "amilièrement faire cuire dans un corps gras bouillant",
	),
	'Flater' => array(
		'part' => 'v. t.',
		'definition' => "affecter agréablement les sens",
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
foreach ($entries as $term => $entry) {
	if (strpos($term, mb_strtoupper($_REQUEST['term'])) !== FALSE) {
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
			foreach ($entry['quote'] as $line) {
				$html .= '<div class="quote-line">'. $line .'</div>';
			}
			if (isset($entry['author'])) {
				$html .= '<div class="quote-author">'.$entry['author'] .'</div>';
			}
		}
		$html .= '</div>';
		$html .= '</div>';
		print($html);
	}
}