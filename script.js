// Compte le nombre de paragraphe
let messagesCount = $("p").length;
$("#count").text(messagesCount);

// Supression quand clic png Poubelle
 $('body').on("click", '.trash',
    function(){
        console.log("click");
        $(this).parent().remove();

        let messagesCount = $("p").length;
        $("#count").text(messagesCount);
 }
 );

// Affichage d'un nouveau message
 $('#btn-add').click(
     function(){
        console.log("click détecté !");
        let textContent = $('#add-message').val();
        $("body").append(`<div class="row">
        <img class="avatar" src="avatar-1.jpg">
        <div>
            <h6>Gautier Marion</h6>
            <p>${textContent}</p>
        </div>
        <img class="trash" src="trash.png">
        </div>
        `);
        
        // Remise à zero du texte
        $("#add-message").val("");

        let messagesCount = $("p").length;
        $("#count").text(messagesCount);
 }  
 );

 // Action de recherche par rapport aux messages
 $('#btn-butt').click(
    function(){
      console.log("click détecté !");
      let textRecherche = $('#add-recherche').val().toLowerCase();
      //console.log(textRecherche);

      $('h6').each(function(){
        //console.log($(this).text());
        let textCompar = $(this).text().toLowerCase();
        if (textCompar.includes(textRecherche) === true) {
            $(this).parent().parent().show();
            console.log("yes");
        } else {
            console.log("no");
            $(this).parent().parent().hide();
        }
        $("#add-recherche").val("");
        let messagesCount = $("p").length;
        $("#count").text(messagesCount);
       })
    }
 );