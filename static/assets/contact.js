$(document).ready(function () {
  $("form").submit(function (event) {
      event.preventDefault();
        $("#errEmai").html("");
        $("#errMobi").html("");
        $.ajax({
            url: "php/contact.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function(response) {
                if ($.trim(response) == "Success") {
                    $('form')[0].reset();
                  $(".container_suc").css("visibility", "visible");
                }else if($.trim(response) == "Invalid"){
                   $(".container_ero").css("visibility", "visible");
                }else if($.trim(response) == "emailerror"){
                    $("#errEmai").html("Invalid Email");
                }else if($.trim(response) == "phoneerror"){
                    $("#errMobi").html("Invalid Phone Number");
                }
            },
        });
  });
});
