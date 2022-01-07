let messagesCount = $("p").length;
$("#count").text(messagesCount);


 $('body').on("click", '.trash',
    function(){
        console.log("click");
        $(this).parent().remove();

        let messagesCount = $("p").length;
        $("#count").text(messagesCount);
 }
 );

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

        $("#add-message").val("");

        let messagesCount = $("p").length;
        $("#count").text(messagesCount);
 }  
 );

 $('#btn-butt').click(
    function(){
      console.log("click détecté !");
      let textRecherche = $('#add-recherche').val();
      //console.log(textRecherche);

      $('h6').each(function(){
        //console.log($(this).text());
        if ($(this).text() === textRecherche) {
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