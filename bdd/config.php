<?php

try{
    $db = new PDO(
        "mysql:dbname=ajax_grafikart;host=localhost;charset=utf8",
        "root",
        "troiswa"
    );

    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch(PDOException $e) {
    die("Erreur: ".$e->getMessage());
}
