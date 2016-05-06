<?php
/**
 * Created by PhpStorm.
 * User: Manu
 * Date: 05/05/2016
 * Time: 18:10
 */

require("bdd/config.php");


//die("L'article a bien été supprimé");

$q = $db->prepare('DELETE FROM microposts WHERE id = ? ' );
$q->execute([$_GET['id']]);

header('location:grafikart.php');