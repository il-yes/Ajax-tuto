<?php
/**
 * Created by PhpStorm.
 * User: Manu
 * Date: 05/05/2016
 * Time: 20:01
 */

require("bdd/config.php");

$q = $db->prepare("INSERT INTO microposts(content, user_id, created_at, like_count, unlike_count)
                   VALUES(:content, :user_id, NOW(), '1', '2') ");
$q->execute([
    'content' => $_POST['content'],
    'user_id' => $_POST['user']
]);

header('location:grafikart.php');