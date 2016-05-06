$(document).ready(function(){

    $('.btn-danger').on('click', function(e){
        e.preventDefault();


        var $a = $(this);
        var url = $a.attr('href');
        // Indique l'action en cours à l'utitlisateur
        $a.text('Chargement...');

        //$.ajax(
        //    url,
        //    {
        //        success : function(){
        //            $a.parents('tr').fadeOut();
        //        },
        //        error : function(jqxhr){
        //            $a.text('Supprimer');
        //            alert(jqxhr.responseText);
        //    }
        //});


        //Seconde syntaxe pour l'ajax en utilisant les promesses :
        $.ajax(url)
            .done(function (data, text, jqxhr) {      // En cas de success
                $a.parents('tr').fadeOut();
            })
            .fail(function (jqxhr) {                  // En cas d'echec
                alert(jqxhr.responseText);
            })
            .always(function () {                     // Dans ts les cas
                $a.text('Supprimer');
            });


    });




    $('#form-add').on('submit', function(e){
        e.preventDefault();

        var $form = $(this);

        $.ajax($($form.attr('action')))
            .done(function (data, text, jqxhr) {      // En cas de success
                $a.parents('tr').fadeOut();
            })
            .fail(function (jqxhr) {                  // En cas d'echec
                alert(jqxhr.responseText);
            })
            .always(function () {                     // Dans ts les cas
                $a.text('Supprimer');
            });




});