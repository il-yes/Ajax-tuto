<?php

require("bdd/config.php");




//Récupération du nombre total de notifications non lues
$q = $db->prepare("SELECT * FROM microposts ORDER BY created_at DESC");

$q->execute();

$messages = $q->fetchAll(PDO::FETCH_OBJ);

//die(var_dump($messages));
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Bootstrap Example</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </head>
    <body>

        <div class="container">
        <h2>Microposts</h2>
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <form id="form-add" action="add.php" method="post" class="form-inline">
                    <div class="form-group">
                        <input type="text" name="content" placeholder="titre" class="form-control">
                    </div>
                    <div class="form-group">
                        <input type="text" name="user" placeholder="Author" class="form-control">
                    </div>
                    <input  type="submit" class="btn btn-primary" value="Envoyer">
                </form>
            </div>
        </div>


        <table class="table table-striped">
            <thead>
            <tr>
                <th>Message</th>
                <th>Author</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($messages as $message) : ?>
                <tr>
                    <td><?= $message->content ;?></td>
                    <td><?= $message->user_id ;?></td>
                    <td><?= $message->created_at ;?></td>
                    <td>
                        <a href="delete.php?id=<?= $message->id ;?>" class="btn btn-danger">Supprimer</a>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>






        <script src="https://code.jquery.com/jquery-2.2.3.min.js" integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script>
        <script src="js/app.js"></script>
        <script>

//            Concept basic de la requette ajax :
//            var request = new XMLHttpRequest();
//            request.onreadystatechange = function(){
//
//                if(this.readyState == 4){
//                    console.log(this.responseText);
//                }
//            };
//
//            request.open('GET', 'delete.php?id=1', true);
//            request.send();
//            request = null;



        </script>
    </body>
</html>

